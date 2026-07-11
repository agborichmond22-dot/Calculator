## 2025-05-15 - [Keyboard Operability and Global Listeners]
**Learning:** When adding a global `keydown` listener for the `Enter` key in an application with interactive buttons, it's crucial to check `document.activeElement`. If a button is already focused, the browser's default behavior will trigger that button's `click` event on `Enter`. Without a check, the action (e.g., `calculate()`) might be executed twice.
**Action:** Always check `document.activeElement.tagName !== 'BUTTON'` (or equivalent) before manually triggering button-related logic in a global `Enter` key listener.
