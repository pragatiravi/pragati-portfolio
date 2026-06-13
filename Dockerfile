# syntax=docker/dockerfile:1

# ---- Stage 1: build the static site ----
FROM node:20-alpine AS build
WORKDIR /app

# Install deps with a clean, reproducible install
COPY package.json package-lock.json* ./
RUN npm ci || npm install

# Build
COPY . .
RUN npm run build

# ---- Stage 2: serve with hardened Nginx (non-root) ----
FROM nginxinc/nginx-unprivileged:1.27-alpine AS runtime

# nginx-unprivileged runs as uid 101 (nginx) and listens on 8080 by default
USER root
RUN rm -rf /usr/share/nginx/html/* \
    && rm /etc/nginx/conf.d/default.conf 2>/dev/null || true

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

# Ensure the static files are readable by the unprivileged user
RUN chown -R 101:101 /usr/share/nginx/html

USER 101
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
