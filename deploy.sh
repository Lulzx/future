#!/usr/bin/env bash
#
# Publish the corpus to https://future.lulzx.space
#
# The site is the markdown itself: index.html is a self-contained reader that
# fetches the .md files over HTTP and renders them in the browser. So a deploy
# is nothing more than copying the tree — there is no build step, and the files
# on the server are byte-identical to the ones in git.
#
# Serving:
#   Caddy (host process, own mount namespace) — /srv/www/future maps to the
#   host path /opt/pgrok/www/future. Site block lives in /opt/pgrok/Caddyfile,
#   which /etc/caddy/Caddyfile symlinks to. TLS is Caddy's automatic Let's
#   Encrypt. DNS: future.lulzx.space A -> 46.225.62.129 (unproxied).
#
# Usage: ./deploy.sh [--check]
#          --check   verify the live site afterwards

set -euo pipefail

HOST="lulz"
REMOTE="/opt/pgrok/www/future"
DOMAIN="future.lulzx.space"

cd "$(dirname "$0")"

echo "→ syncing to ${HOST}:${REMOTE}"
rsync -az --delete \
  --exclude '.git' \
  --exclude 'deploy.sh' \
  --exclude '.DS_Store' \
  ./ "${HOST}:${REMOTE}/"

count=$(ssh "$HOST" "find ${REMOTE} -name '*.md' | wc -l")
echo "→ ${count} markdown files live"

if [[ "${1:-}" == "--check" ]]; then
  # Pin the IP from a public resolver: a local stub resolver that cached a
  # negative answer before the record existed would otherwise fail the check
  # while the site is perfectly fine for everyone else.
  ip=$(dig +short @1.1.1.1 "$DOMAIN" | head -1)
  [[ -n "$ip" ]] || { echo "   ${DOMAIN} does not resolve"; exit 1; }
  echo "→ checking ${DOMAIN} (${ip})"
  for path in / /README.md /RESEARCH.md /09-macro/demography.md; do
    code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 \
      --resolve "${DOMAIN}:443:${ip}" "https://${DOMAIN}${path}")
    printf '   %-28s %s\n' "$path" "$code"
    [[ "$code" == "200" ]] || { echo "   FAILED"; exit 1; }
  done
fi

echo "→ done · https://${DOMAIN}"
