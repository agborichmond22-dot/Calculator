## 2025-05-14 - Accessible Icon Buttons and Focus Indicators
**Learning:** In a simple utility like a calculator, icon-only buttons (like ⌫) and ambiguous labels (like C or X) are major accessibility barriers. Providing explicit `aria-label` values and visible `:focus-visible` indicators significantly improves the experience for screen reader and keyboard users.
**Action:** Always check for non-textual or ambiguous button labels and ensure interactive elements have a high-contrast focus state that doesn't rely solely on color.
