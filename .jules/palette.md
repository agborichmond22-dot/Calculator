## 2026-07-14 - Accessibility Patterns for Symbol-Based Controls
**Learning:** Symbol-only buttons (e.g., ⌫, C, +, -, X, /) are opaque to screen readers if they don't have descriptive text. Using `aria-label` provides the necessary context without changing the visual design. Additionally, adding `aria-live="polite"` to calculation displays ensures results are announced immediately upon evaluation.
**Action:** Always provide `aria-label` for non-textual or symbol-based interactive elements and use live regions for dynamic output fields.
