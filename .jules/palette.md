# Palette UX & Accessibility Journal

This journal documents critical learnings regarding user experience (UX) and web accessibility (a11y) discovered during development.

## 2026-07-17 - Keyboard Navigation Focus Indicators and Interactive Button Accessibility
**Learning:** Adding a focus indicator using `:focus` style on buttons can often feel visually intrusive during mouse-clicks, causing unwanted borders. Using `:focus-visible` instead ensures that high-contrast outlines (e.g., 4px blue outline) are only displayed for keyboard navigators, maintaining a polished experience for mouse users while providing excellent accessibility. Moreover, icon-only and abbreviation buttons (like C, ⌫, X, etc.) must always be accompanied by descriptive `aria-label` attributes to ensure screen readers announce them properly instead of reading out cryptic symbols.
**Action:** Always prefer `:focus-visible` over `:focus` for button outline highlights, and ensure every visual symbol or shorthand button has a clear, verbose `aria-label` attribute.
