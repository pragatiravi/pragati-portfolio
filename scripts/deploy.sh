#!/usr/bin/env bash
# Executed ON the EC2 host (piped in via SSH from the GitLab deploy job).
# Required env (exported by the deploy job): REGISTRY, REGISTRY_USER, REGISTRY_PASSWORD, IMAGE
set -euo pipefail

CONTAINER_NAME="portfolio"
HOST_PORT=80
CONTAINER_PORT=8080

echo "==> Logging in to $REGISTRY"
echo "$REGISTRY_PASSWORD" | docker login -u "$REGISTRY_USER" --password-stdin "$REGISTRY"

echo "==> Pulling $IMAGE"
docker pull "$IMAGE"

echo "==> Stopping previous container (if any)"
docker stop "$CONTAINER_NAME" 2>/dev/null || true
docker rm "$CONTAINER_NAME" 2>/dev/null || true

echo "==> Starting new container"
docker run -d \
  --name "$CONTAINER_NAME" \
  --restart unless-stopped \
  -p ${HOST_PORT}:${CONTAINER_PORT} \
  "$IMAGE"

echo "==> Waiting for health"
for i in $(seq 1 10); do
  if curl -fsS "http://127.0.0.1:${HOST_PORT}/healthz" >/dev/null 2>&1; then
    echo "==> Healthy."
    break
  fi
  sleep 2
done

echo "==> Pruning old images"
docker image prune -f >/dev/null 2>&1 || true

docker logout "$REGISTRY" >/dev/null 2>&1 || true
echo "==> Deploy complete: $IMAGE"
