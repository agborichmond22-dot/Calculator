## 2025-05-14 - Event Delegation and State Caching
**Learning:** The application used inline `onclick` handlers, which is a performance anti-pattern due to memory overhead and poor separation of concerns. Additionally, frequent reads from `display.value` can be optimized by caching the state in a local variable.
**Action:** Always prefer event delegation for groups of similar interactive elements and use local state variables to cache DOM values that are frequently updated.
