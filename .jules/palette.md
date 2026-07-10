## 2025-05-14 - Enhanced Keyboard & Screen Reader Accessibility
**Learning:** Adding a global `keydown` listener for 'Enter' can cause duplicate triggers if a button is already focused and handled by the browser. Additionally, using `eval()` on an empty string returns `undefined`, which shouldn't be displayed to the user.
**Action:** Use `if (document.activeElement.tagName !== "BUTTON")` to guard the 'Enter' key listener and add an early return for empty display values in the calculation function.
