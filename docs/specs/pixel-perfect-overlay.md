# Pixel-Perfect Overlay Comparison

Compare the live Next.js implementation against the Figma source frames by ghosting a viewport screenshot over the design at 10% opacity.

---

## Scope

Four comparisons — two pages × two viewports:

| # | Page | Viewport (px) | Figma frame | Node ID |
|---|------|---------------|-------------|---------|
| 1 | `/art` | 1440 × 3773 | Art Index — Desktop | `2:2` |
| 2 | `/art` | 390 × 2008 | Art Index — Mobile | `2:3` |
| 3 | `/art/getaways` | 1440 × 2692 | Art Detail — Desktop | `8:2` |
| 4 | `/art/getaways` | 390 × 1194 | Art Detail — Mobile | `9:2` |

Viewport dimensions are taken directly from the Figma frame metadata. Setting the browser viewport to exact frame dimensions means a single non-`fullPage` screenshot captures the entire page — no stitching needed. `position: fixed` header stays at y=0, matching how Figma renders it.

---

## Pre-conditions

- Dev server running at `http://localhost:3001` (or confirm active port)
- Figma file key: `UVcDD1jjRFcBkycerRMxKp`
- Figma page: `Art Index` (only page in file)
- Screenshots saved to `<project>/overlay-screenshots/` (inside project dir — Playwright cannot write to `/tmp/`)

---

## Steps (repeat for each of the 4 comparisons)

### Step 1 — Confirm frame dimensions

```js
// use_figma
const frame = await figma.getNodeByIdAsync('<NODE_ID>');
return { width: frame.width, height: frame.height, x: frame.x, y: frame.y };
```

Cross-check returned values against the table above. Abort if they differ.

### Step 2 — Take viewport screenshot of live page

```
resize_page       width=<frame.width>  height=<frame.height>
navigate_page     url=http://localhost:3001/<path>
take_screenshot   filePath=overlay-screenshots/live-<label>.png
```

- No `fullPage: true` — viewport height equals frame height, so whole page is captured
- `<label>` = `art-desktop` | `art-mobile` | `getaways-desktop` | `getaways-mobile`

### Step 3 — Upload screenshot to Figma

```
upload_assets  fileKey=UVcDD1jjRFcBkycerRMxKp  count=1
```

POST the PNG to the returned `submitUrl`:

```bash
curl -X POST "<submitUrl>" -F "file=@overlay-screenshots/live-<label>.png;type=image/png"
```

Note the returned `placedOnNodeId`.

### Step 4 — Position overlay node

```js
// use_figma
const overlay = await figma.getNodeByIdAsync('<placedOnNodeId>');
overlay.name = '⟠ Overlay — /<path> <viewport> (10%)';
overlay.resize(<frame.width>, <frame.height>);
overlay.x = <frame.x>;
overlay.y = <frame.y>;
overlay.opacity = 0.1;
return { id: overlay.id, x: overlay.x, y: overlay.y };
```

**Critical:** overlay must be a sibling of the design frame, not a child inside it. Parent must be the Figma page node.

### Step 5 — Screenshot the design frame with overlay

```
get_screenshot
  fileKey=UVcDD1jjRFcBkycerRMxKp
  nodeId=<design frame node id>
  contentsOnly=false          ← includes overlapping sibling overlay
  maxDimension=<longer edge>  ← avoids scaling artifacts
```

Download result:

```bash
curl -s -o overlay-screenshots/result-<label>.png "<image_url>"
```

### Step 6 — Analyze

Read `overlay-screenshots/result-<label>.png` and report findings per category:

| Signal | Meaning |
|--------|---------|
| Element doubled / offset ghost | Exists in both; positions differ |
| Missing ghost | Live page element absent from Figma |
| Extra ghost | Figma element absent from live page |
| Blurry overlap | Size or font mismatch |
| Clean single image | Pixel-perfect |

---

## Output

After all 4 comparisons, produce a findings table:

| Comparison | Status | Issues |
|------------|--------|--------|
| /art desktop | ✓ / ✗ | … |
| /art mobile | ✓ / ✗ | … |
| /art/getaways desktop | ✓ / ✗ | … |
| /art/getaways mobile | ✓ / ✗ | … |

For each issue: note the element, the observed offset or delta, and the Figma node ID if identifiable.

---

## Cleanup

After analysis, delete all `⟠ Overlay` nodes from the Figma file:

```js
// use_figma
const page = figma.currentPage;
const overlays = page.children.filter(n => n.name.startsWith('⟠ Overlay'));
overlays.forEach(n => n.remove());
return { removed: overlays.length };
```

---

## Common pitfalls

| Pitfall | Fix |
|---------|-----|
| Overlay placed inside design frame | Parent must be `figma.currentPage`, not the frame |
| `contentsOnly: true` (default) | Always pass `contentsOnly: false` |
| Wrong port | Confirm dev server port before Step 2 |
| Frame dimensions changed | Re-run Step 1 to confirm before each comparison |
