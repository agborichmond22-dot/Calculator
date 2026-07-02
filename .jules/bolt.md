## 2025-07-02 - Event Delegation Anti-pattern in Vanilla JS
**Learning:** In vanilla JS applications with many interactive elements (like a calculator), using inline `onclick` handlers creates unnecessary memory overhead and makes DOM management brittle. Event delegation on a common parent is significantly more efficient and easier to maintain.
**Action:** Always look for patterns where multiple siblings have similar event handlers and refactor to a single delegated listener on the parent.
