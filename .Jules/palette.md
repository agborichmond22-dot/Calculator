## 2025-05-15 - [Global Keyboard Event Conflicts]
**Learning:** Globally intercepting the "Enter" key with `event.preventDefault()` breaks standard keyboard navigation where `Tab + Enter` is used to activate focused elements.
**Action:** When implementing global shortcuts, check if an interactive element (like a button) is currently focused before preventing default behavior for "Enter".
