/**
 * Usage: tsx pixel-diff.ts <figma.png> <impl.png> <diff.png>
 *
 * Prints JSON to stdout:
 * {
 *   "score": 0.031,          // diffPixels / totalPixels (pass = < 0.02)
 *   "diffPixels": 170924,
 *   "totalPixels": 5529360,
 *   "pass": false,
 *   "hotspots": [
 *     { "x": 0, "y": 280, "width": 1440, "height": 80 }, ...
 *   ]
 * }
 */

import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
import { readFileSync, writeFileSync } from 'fs';

const PASS_THRESHOLD = 0.02;
const CELL = 40; // px grid cell for hotspot clustering

const [, , figmaPath, implPath, diffPath] = process.argv;
if (!figmaPath || !implPath || !diffPath) {
  console.error('Usage: tsx pixel-diff.ts <figma.png> <impl.png> <diff.png>');
  process.exit(1);
}

const figma = PNG.sync.read(readFileSync(figmaPath));
const impl = PNG.sync.read(readFileSync(implPath));

const { width, height } = figma;
if (impl.width !== width || impl.height !== height) {
  console.error(
    JSON.stringify({
      error: 'dimension_mismatch',
      figma: `${width}×${height}`,
      impl: `${impl.width}×${impl.height}`,
    }),
  );
  process.exit(1);
}

const diff = new PNG({ width, height });
const diffPixels = pixelmatch(figma.data, impl.data, diff.data, width, height, {
  threshold: 0.1,
  alpha: 0.3,
  includeAA: false,
});

writeFileSync(diffPath, PNG.sync.write(diff));

const totalPixels = width * height;
const score = diffPixels / totalPixels;

// Grid-based hotspot clustering
const cols = Math.ceil(width / CELL);
const rows = Math.ceil(height / CELL);
const hotCells = new Set<number>();

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    // diff pixels = R=255 G=0 (red); matching pixels = R=G=B (gray/white) — key: G near zero
    const idx = (y * width + x) * 4;
    if (diff.data[idx] > 200 && diff.data[idx + 1] < 50) {
      hotCells.add(Math.floor(y / CELL) * cols + Math.floor(x / CELL));
    }
  }
}

const visited = new Set<number>();
const hotspots: { x: number; y: number; width: number; height: number }[] = [];

for (const cell of hotCells) {
  if (visited.has(cell)) continue;
  const component: number[] = [];
  const queue = [cell];
  while (queue.length) {
    const c = queue.pop()!;
    if (visited.has(c)) continue;
    visited.add(c);
    component.push(c);
    const r = Math.floor(c / cols), col = c % cols;
    for (const [dr, dc] of [[-1,0],[1,0],[0,-1],[0,1]]) {
      const n = (r + dr) * cols + (col + dc);
      if (r+dr >= 0 && r+dr < rows && col+dc >= 0 && col+dc < cols && hotCells.has(n) && !visited.has(n))
        queue.push(n);
    }
  }
  let minR = Infinity, maxR = -Infinity, minC = Infinity, maxC = -Infinity;
  for (const c of component) {
    const r = Math.floor(c / cols), col = c % cols;
    if (r < minR) minR = r; if (r > maxR) maxR = r;
    if (col < minC) minC = col; if (col > maxC) maxC = col;
  }
  hotspots.push({ x: minC*CELL, y: minR*CELL, width: (maxC-minC+1)*CELL, height: (maxR-minR+1)*CELL });
}

hotspots.sort((a, b) => a.y - b.y);

console.log(JSON.stringify({ score, diffPixels, totalPixels, pass: score < PASS_THRESHOLD, hotspots }, null, 2));
