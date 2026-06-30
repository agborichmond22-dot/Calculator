## 2025-05-14 - [Event Delegation and State Caching]
**Learning:** In simple JS/HTML apps, replacing multiple inline `onclick` handlers with event delegation and caching DOM values in a local variable provides a cleaner architecture and reduces memory overhead.
**Action:** Always look for patterns where multiple similar elements have individual listeners and refactor to use a single listener on a parent container. Use local variables to track state instead of reading from the DOM repeatedly.
