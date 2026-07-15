## 2025-07-15 - Improving Accessibility and Fixing "Ghost" Buttons
**Learning:** Buttons with symbols (like ⌫) or single letters (like C) are inaccessible to screen readers and confusing for keyboard users without proper ARIA labels and focus indicators. Additionally, features that appear in the UI but lack underlying logic (like the non-functional backspace) create significant user frustration.
**Action:** Always provide `aria-label` for symbolic buttons, ensure `focus-visible` styles are distinct, and verify that every interactive UI element has a corresponding functional implementation.
