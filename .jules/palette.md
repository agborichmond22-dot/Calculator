## 2026-07-21 - Calculator Keyboard Navigation and High Contrast Focus States
**Learning:** Adding `:focus-visible` outline selectors prevents double focus indicators for mouse clicks while keeping focus states extremely clear for keyboard-only users.
**Action:** Always prefer `:focus-visible` with a distinct, high-contrast color (such as `#4361EE` with appropriate outline-offset) over general `:focus` to balance mouse and keyboard usability in high-contrast interfaces.
