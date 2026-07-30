#!/usr/bin/env bash
#
# Publish the corpus to https://future.lulzx.space
#
# The site is pre-rendered static HTML: build.mjs renders every .md into a
# plain .html page (no client-side JavaScript needed to read the content), and
# the raw .md files are published alongside at the same paths. A deploy is
# build + copy of _site/.
#
# Serving:
#   Caddy (host process, own mount namespace) — /srv/www/future maps to the
#   host path /opt/pgrok/www/future. Site block lives in /opt/pgrok/Caddyfile,
#   which /etc/caddy/Caddyfile symlinks to. TLS is Caddy's automatic Let's
#   Encrypt. Caddy listens dual-stack, so both families hit the same site.
#
#   DNS (Cloudflare, both unproxied):
#     future.lulzx.space  A     46.225.62.129
#                         AAAA  2a01:4f8:1c19:ebc::1
#
# Usage: ./deploy.sh [--check]
#          --check   verify the live site afterwards, over IPv4 and IPv6

set -euo pipefail

HOST="lulz"
REMOTE="/opt/pgrok/www/future"
DOMAIN="future.lulzx.space"

cd "$(dirname "$0")"

if [[ -x ./check-invariants.sh ]]; then
  echo "→ invariants"
  ./check-invariants.sh
fi

echo "→ building static pages"
node build.mjs

echo "→ syncing to ${HOST}:${REMOTE}"
rsync -az --delete \
  --exclude '.DS_Store' \
  _site/ "${HOST}:${REMOTE}/"

count=$(ssh "$HOST" "find ${REMOTE} -name '*.md' | wc -l")
echo "→ ${count} markdown files live"

check_family() {
  # $1 = 4|6, $2 = address. --resolve wants v6 literals bracketed.
  local family=$1 addr=$2 target=$2 path code
  [[ "$family" == 6 ]] && target="[${addr}]"
  echo "→ checking ${DOMAIN} over IPv${family} (${addr})"
  for path in / /style.css /README.md /RESEARCH.md /09-macro/demography.md; do
    code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 \
      --resolve "${DOMAIN}:443:${target}" "https://${DOMAIN}${path}")
    printf '   %-28s %s\n' "$path" "$code"
    [[ "$code" == "200" ]] || { echo "   FAILED (IPv${family})"; exit 1; }
  done
}

if [[ "${1:-}" == "--check" ]]; then
  # Pin the addresses from a public resolver: a local stub resolver that cached
  # a negative answer before the record existed would otherwise fail the check
  # while the site is perfectly fine for everyone else. Cloudflare's SOA minimum
  # is 1800s, so a freshly added record can stay negatively cached for 30min.
  v4=$(dig +short @1.1.1.1 "$DOMAIN" A    | head -1)
  v6=$(dig +short @1.1.1.1 "$DOMAIN" AAAA | head -1)
  [[ -n "$v4" || -n "$v6" ]] || { echo "   ${DOMAIN} does not resolve"; exit 1; }

  # An `x && y` statement that evaluates false is itself a failure under
  # `set -e`, so these stay as plain ifs.
  if [[ -n "$v4" ]]; then
    check_family 4 "$v4"
  else
    echo "   no A record — IPv4-only clients cannot reach the site"
  fi

  if [[ -n "$v6" ]]; then
    # Only meaningful if this machine can actually reach the v6 internet —
    # otherwise we would report the site broken when it is our own network that
    # lacks IPv6. Probe a well-known address rather than trusting local ifconfig,
    # which shows link-local and stale addresses that route nowhere.
    if curl -s -6 -o /dev/null --max-time 8 https://[2606:4700:4700::1111]/ 2>/dev/null; then
      check_family 6 "$v6"
    else
      echo "   AAAA is ${v6} but this machine has no IPv6 route — skipped"
    fi
  else
    echo "   no AAAA record — IPv6-only clients cannot reach the site"
  fi
fi

echo "→ done · https://${DOMAIN}"
