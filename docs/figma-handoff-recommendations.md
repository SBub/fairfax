# Figma Board Quality Recommendations for Code Handoff

Implementation quality is a direct function of Figma board quality. The following issues were identified during this project and caused real bugs that required manual pixel-diff analysis to catch. Each recommendation eliminates a class of ambiguity.

---

## 1. Set explicit line-heights — never use AUTO

**Problem:** Every card text node uses `lineHeight: AUTO`. The Figma API returns no numeric value for AUTO — it is literally unreadable by any code generation tool or developer inspecting the file programmatically. Implementers must guess, measure proxy nodes sideways, or get it wrong.

**Fix:** Set explicit pixel values on all text nodes (`lineHeight: { unit: "PIXELS", value: 13 }`). The value shows up directly in the API and in Dev Mode.

---

## 2. Use auto-resizing text nodes, not fixed-size containers

**Problem:** All card content text nodes have `textAutoResize: NONE` — fixed-size boxes. This makes the node's height a designer-chosen container value, not a font-metric output. A node with h=40 containing 2 lines of text looks like it implies 20px line-height, but it does not — the lines could be 13px with 14px of empty space below. The node height actively misleads.

**Fix:** Use auto-resizing text nodes (height hugs content), or use Auto Layout so all spacing is expressed as explicit gap/padding values rather than baked into a fixed container dimension.

---

## 3. Use Auto Layout for all content columns

**Problem:** The gap between the date block and excerpt text was only recoverable by diffing y-coordinates: `y(excerpt) − y(date) − h(date) = 56 − 0 − 40 = 16px`. This requires three separate reads and arithmetic. Any of those values being a fixed-container artifact (see #2) breaks the calculation entirely.

**Fix:** Use Auto Layout on all multi-element containers. Gap values appear directly in the API (`gap: 16`) and in Dev Mode — no arithmetic required.

---

## 4. Define and apply text styles for every typographic role

**Problem:** Every text node has its properties set inline. There is no shared definition of what "card body text" is. When the same 11px/Regular/AUTO combination appears across 20 nodes, there is no way to know if they are intentionally identical or accidentally inconsistent.

**Fix:** Define named text styles for every typographic role (e.g. `Card/Body`, `Card/Meta`, `Nav/Item`). A text style bundles font family, size, weight, and line-height into one spec that is unambiguous, reusable, and surfaced as a single named entity in Dev Mode and the API.

---

## 5. Use Figma Variables for all spacing values

**Problem:** Padding, gaps, and margins are raw numbers with no semantic meaning. When a node has `pt=24`, there is no way to know whether it is intentional, a leftover from a drag, or consistent with other similar nodes. Raw numbers require developer judgment to interpret.

**Fix:** Define Figma Variables for spacing values (e.g. `spacing/16`, `spacing/24`). Named variables make intent explicit, are readable programmatically, and make global spacing changes safe.

---

## Summary

| Issue | Root cause | Fix |
|---|---|---|
| Wrong line-height in code | AUTO returns no value | Explicit px line-height on all text nodes |
| Line-height inferred from container | `textAutoResize: NONE` misleads | Auto-resizing nodes or Auto Layout |
| Gap values require arithmetic | Manual y-position layout | Auto Layout with explicit gap |
| Typography inconsistency undetectable | Inline properties, no styles | Named text styles for every role |
| Spacing intent unreadable | Raw numbers | Figma Variables for spacing |

The pattern: **implicit = ambiguous = bugs**. Every decision the board makes explicit and machine-readable is one fewer assumption the implementer has to make.
