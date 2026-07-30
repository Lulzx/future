#!/usr/bin/env bash
#
# Check corpus invariants from RESEARCH.md §7 (subset that is machine-checkable).
# Usage: ./check-invariants.sh
# Exit 0 if clean; 1 if any check fails.

set -euo pipefail
cd "$(dirname "$0")"

ROOT=$(pwd)
FAIL=0
HARD_CAP=180
DIR_CAP=10
EXEMPT_OVER='^(RESEARCH|HISTORY)\.md$'

note() { printf '%s\n' "$*"; }
fail() { note "FAIL: $*"; FAIL=1; }
ok()   { note "OK:   $*"; }

# ── 1. Internal markdown links resolve ─────────────────────────────────────
broken=$(python3 - <<'PY'
import pathlib, re
root = pathlib.Path('.')
link_re = re.compile(r'\[([^\]]*)\]\(([^)]+)\)')
broken = []
for f in sorted(root.rglob('*.md')):
    text = re.sub(r'```.*?```', '', f.read_text(), flags=re.S)
    for m in link_re.finditer(text):
        href = m.group(2).split('#')[0].split(' ')[0]
        if not href or href.startswith(('http:', 'https:', 'mailto:')):
            continue
        t = (f.parent / href).resolve()
        try:
            t.relative_to(pathlib.Path('.').resolve())
        except ValueError:
            broken.append(f'{f}: {href} (escapes root)')
            continue
        good = t.exists() or (
            not t.suffix and ((t / 'README.md').exists() or t.is_dir())
        )
        if not good:
            broken.append(f'{f}: {href}')
print('\n'.join(broken))
PY
)
if [[ -n "$broken" ]]; then
  fail "broken internal links:"
  printf '%s\n' "$broken" | sed 's/^/       /'
else
  ok "0 broken internal links"
fi

# ── 2. Parent / Index header on content files ──────────────────────────────
missing_nav=$(python3 - <<'PY'
import pathlib
root = pathlib.Path('.')
missing = []
for f in sorted(root.rglob('*.md')):
    if f.name == 'RESEARCH.md':
        continue
    head = '\n'.join(f.read_text().splitlines()[:20])
    if '←' not in head and '](README.md)' not in head and '](../README.md)' not in head:
        # allow root README
        if f.resolve() == (root / 'README.md').resolve():
            continue
        missing.append(str(f))
print('\n'.join(missing))
PY
)
if [[ -n "$missing_nav" ]]; then
  fail "files missing early nav / parent link:"
  printf '%s\n' "$missing_nav" | sed 's/^/       /'
else
  ok "parent/nav headers present"
fi

# ── 3. Hard line cap (with exemption) ──────────────────────────────────────
over=$(python3 - <<PY
import pathlib, re
hard = $HARD_CAP
exempt = re.compile(r'$EXEMPT_OVER')
rows = []
for f in sorted(pathlib.Path('.').rglob('*.md')):
    n = len(f.read_text().splitlines())
    if n > hard and not exempt.search(str(f)):
        rows.append(f'{n}\t{f}')
print('\n'.join(rows))
PY
)
if [[ -n "$over" ]]; then
  fail "files over hard cap ($HARD_CAP) without exemption:"
  printf '%s\n' "$over" | sed 's/^/       /'
else
  ok "no unexempted file over $HARD_CAP lines"
fi

# ── 4. Directory content-file cap ──────────────────────────────────────────
dir_over=$(python3 - <<PY
from pathlib import Path
from collections import defaultdict
cap = $DIR_CAP
c = defaultdict(int)
for f in Path('.').rglob('*.md'):
    if f.name == 'README.md':
        continue
    c[str(f.parent)] += 1
rows = [f'{n}\t{d}' for d, n in sorted(c.items()) if n > cap]
print('\n'.join(rows))
PY
)
if [[ -n "$dir_over" ]]; then
  fail "directories with >$DIR_CAP content files (excl. README):"
  printf '%s\n' "$dir_over" | sed 's/^/       /'
else
  ok "no directory over $DIR_CAP content files"
fi

# ── 5. Depth cap: max 3 directory levels below root ────────────────────────
too_deep=$(python3 - <<'PY'
from pathlib import Path
rows = []
for f in sorted(Path('.').rglob('*.md')):
    if len(f.parts) > 4:  # part/group/subgroup/file.md is the deepest allowed
        rows.append(str(f))
print('\n'.join(rows))
PY
)
if [[ -n "$too_deep" ]]; then
  fail "files deeper than 3 directory levels:"
  printf '%s\n' "$too_deep" | sed 's/^/       /'
else
  ok "no file deeper than 3 directory levels"
fi

# ── 6. Counts ──────────────────────────────────────────────────────────────
counts=$(python3 - <<'PY'
from pathlib import Path
files = list(Path('.').rglob('*.md'))
lines = sum(len(p.read_text().splitlines()) for p in files)
print(f'{len(files)} files, {lines} lines')
PY
)
ok "corpus $counts"

# ── 7. Refresh catalog.json for the reader find UI ─────────────────────────
python3 - <<'PY'
from pathlib import Path
import json, re

def title_of(path: Path) -> str:
    for line in path.read_text(errors='replace').splitlines():
        m = re.match(r'^#\s+(.+)$', line.strip())
        if m:
            return m.group(1).strip()
    return path.stem

entries = []
for p in sorted(Path('.').rglob('*.md')):
    if any(part.startswith('.') for part in p.parts):
        continue
    entries.append({"path": p.as_posix(), "title": title_of(p)})
Path('catalog.json').write_text(json.dumps(entries, indent=2, ensure_ascii=False) + '\n')
print(len(entries))
PY
ok "catalog.json refreshed"

# ── summary ────────────────────────────────────────────────────────────────
if [[ "$FAIL" -ne 0 ]]; then
  note ""
  note "Invariants check FAILED"
  exit 1
fi
note ""
note "Invariants check passed"
exit 0
