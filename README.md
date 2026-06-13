# Pragati Ravi Gangoji — Portfolio

A production-ready personal portfolio for **Pragati Ravi Gangoji** (Cloud Engineer • Software Developer • Systems Builder), built to double as a complete **DevOps & Cloud Engineering showcase**: containerized with Docker, served by hardened Nginx, and deployed automatically to **AWS EC2** through a full **GitLab CI/CD** pipeline using the **GitLab Container Registry**.

---

## Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Frontend     | React 18, TypeScript, Vite          |
| Styling      | Tailwind CSS                        |
| Animations   | Framer Motion (subtle, 150–250ms)   |
| Tests        | Vitest + Testing Library            |
| Container    | Docker (multi-stage, non-root)      |
| Web server   | Nginx (unprivileged, port 8080)     |
| CI/CD        | GitLab CI/CD                        |
| Registry     | GitLab Container Registry           |
| Cloud        | AWS EC2 (Ubuntu 22.04)              |

---

## Architecture

```
          ┌──────────────┐    push to main    ┌─────────────────────────────┐
          │   Developer  │ ─────────────────▶ │        GitLab CI/CD         │
          └──────────────┘                    │  test → build → docker-build │
                                               │   → push-image → deploy      │
                                               └───────────────┬─────────────┘
                                                               │ docker push
                                                               ▼
                                                 ┌───────────────────────────┐
                                                 │ GitLab Container Registry  │
                                                 │  registry.gitlab.com/...   │
                                                 └───────────────┬───────────┘
                                                                 │ SSH + docker pull
                                                                 ▼
                                              ┌────────────────────────────────┐
                                              │            AWS EC2             │
                                              │  Docker → Nginx container :80  │
                                              │  restart: unless-stopped       │
                                              │  healthcheck /healthz          │
                                              └───────────────┬────────────────┘
                                                              │ :80
                                                              ▼
                                                       🌐 Visitors
```

---

## Local Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run test     # run unit tests
npm run build    # production build -> dist/
```

> Add your resume as `public/resume.pdf` so the **Download Resume** button works, and an `public/og-image.png` (1200×630) for rich social previews.

---

## Docker

Multi-stage build: Node compiles the static site, then it is served by the **unprivileged Nginx** image (runs as UID 101, listens on 8080).

```bash
# Build
docker build -t portfolio:local .

# Run (map host 80 -> container 8080)
docker run -d --name portfolio -p 80:8080 portfolio:local

# Verify
curl http://localhost/healthz   # -> ok
```

Key hardening choices:
- Non-root runtime user (UID 101)
- Minimal Alpine-based images
- `HEALTHCHECK` on `/healthz`
- Security headers + gzip in Nginx
- SPA fallback to `index.html`

---

## GitLab CI/CD Flow

Defined in `.gitlab-ci.yml`. Every push to `main` runs:

1. **test** — install deps, lint, run Vitest.
2. **build** — `vite build`, upload `dist/` as an artifact.
3. **docker-build** — build the image (DinD), tag with commit SHA + `latest`.
4. **push-image** — push both tags to the GitLab Container Registry.
5. **deploy** — SSH into EC2, pull the new image, stop the old container, start the new one, health-check.

Feature branches / MRs run **test** and **build** only — image build and deploy are gated to the default branch.

---

## Required GitLab CI/CD Variables

Set under **Settings → CI/CD → Variables**:

| Variable               | Type     | Example / Notes                                              |
|------------------------|----------|--------------------------------------------------------------|
| `EC2_HOST`             | Variable | `13.234.x.x` (public IP or DNS). Mark **Protected**.         |
| `EC2_USER`             | Variable | `ubuntu` (Ubuntu AMI) or `ec2-user` (Amazon Linux).          |
| `EC2_SSH_KEY`          | **File** | Full contents of the private `.pem` key. **Protected**.      |
| `CI_REGISTRY_USER`     | Variable | Predefined by GitLab — usually no need to set.               |
| `CI_REGISTRY_PASSWORD` | Variable | Predefined (`$CI_JOB_TOKEN`) — usually no need to set.        |

**Recommended** (so EC2 can pull the private image independently of the job token) — create a **Deploy Token** (Settings → Repository → Deploy tokens) with `read_registry` scope and add:

| Variable                | Type     | Notes                                  |
|-------------------------|----------|----------------------------------------|
| `REGISTRY_DEPLOY_USER`  | Variable | Deploy token username                  |
| `REGISTRY_DEPLOY_TOKEN` | Variable | Deploy token (masked)                  |

If these two are not set, the deploy falls back to `CI_REGISTRY_USER` / `CI_REGISTRY_PASSWORD`.

---

## AWS EC2 Deployment — Step by Step

### 1. Launch the instance
- AMI: **Ubuntu Server 22.04 LTS**
- Type: `t3.micro` (or larger)
- Key pair: create/download a `.pem` (this private key goes into `EC2_SSH_KEY`)
- Security Group inbound rules:
  - **22 (SSH)** — your IP only
  - **80 (HTTP)** — `0.0.0.0/0`
  - **443 (HTTPS)** — `0.0.0.0/0` (for future TLS)
- (Optional) Allocate an **Elastic IP** and associate it so `EC2_HOST` stays stable.

### 2. Bootstrap Docker (one time)
SSH in and run the setup script:
```bash
ssh -i your-key.pem ubuntu@EC2_HOST
# copy scripts/setup-ec2.sh to the host, then:
sudo bash setup-ec2.sh
# log out and back in so the docker group applies
```

### 3. Configure GitLab variables
Add the variables from the table above.

### 4. Deploy
Push to `main`. The pipeline builds, pushes, and deploys automatically. Visit:
```
http://EC2_HOST
```

The deploy job runs `scripts/deploy.sh` on the host, which logs in to the registry, pulls the SHA-tagged image, replaces the running container, and health-checks `/healthz`.

---

## Project Structure

```
.
├── .gitlab-ci.yml          # CI/CD pipeline
├── Dockerfile              # multi-stage, non-root Nginx
├── docker-compose.yml      # optional host run definition
├── nginx/nginx.conf        # hardened server config
├── scripts/
│   ├── setup-ec2.sh        # one-time EC2 Docker bootstrap
│   └── deploy.sh           # runs on EC2 during deploy
├── public/                 # robots.txt, sitemap.xml, favicon
├── index.html              # SEO meta, OG tags, JSON-LD
└── src/
    ├── components/         # Navbar, Footer, Section
    ├── sections/           # Hero, About, Skills, Experience, ...
    ├── data/content.ts     # all editable site content
    └── App.tsx
```

All site copy lives in `src/data/content.ts` — edit there to update projects, skills, experience, etc.

---

## Future Improvements

- **HTTPS** via Let's Encrypt (Certbot) or an AWS ALB + ACM certificate.
- **Blue/green deploys** to remove the brief restart gap.
- **Infrastructure as Code** with Terraform for the EC2 + SG + Elastic IP.
- **CDN** (CloudFront) in front of the instance for global caching.
- **Lighthouse + Playwright** checks added as CI quality gates.
- **Monitoring**: container/host metrics and uptime alerts.
