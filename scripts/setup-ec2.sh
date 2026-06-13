#!/usr/bin/env bash
# One-time bootstrap for a fresh Ubuntu 22.04 EC2 instance.
# Usage: copy to the instance and run with sudo:  sudo bash setup-ec2.sh
set -euo pipefail

echo "==> Updating packages"
sudo apt-get update -y

echo "==> Installing prerequisites"
sudo apt-get install -y ca-certificates curl gnupg

echo "==> Installing Docker Engine"
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update -y
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

echo "==> Enabling Docker"
sudo systemctl enable --now docker

echo "==> Allowing the login user to run docker"
sudo usermod -aG docker "${SUDO_USER:-$USER}" || true

echo "==> Done. Log out and back in for docker group to take effect."
echo "    Open ports 22 (your IP), 80, and 443 in the EC2 Security Group."
