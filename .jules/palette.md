## 2025-05-15 - Calculator Accessibility and Keyboard Support
**Learning:** When implementing global keyboard shortcuts (like 'Enter' for calculation) in an application with interactive buttons, it's crucial to prevent double-triggering. If a button is already focused, the 'Enter' key naturally triggers a 'click' event; a global listener must check the active element to avoid executing the logic twice.
**Action:** Use `if (document.activeElement.tagName !== "BUTTON")` or similar guards in global keydown listeners for keys that have default interactive behaviors on focused elements.
