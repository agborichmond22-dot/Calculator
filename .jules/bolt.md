## 2025-05-14 - DOM State vs. Local Variable
**Learning:** In this specific environment (Chromium/Playwright), reading from `display.value` is slightly slower than a local variable, but batching updates and reducing DOM writes is more impactful. Surprisingly, `eval()` performed significantly better than `new Function()` for simple arithmetic expressions (~9x faster in initial benchmarks).
**Action:** Use local state variables for frequent updates and stick with `eval()` for simple math calculations while ensuring input is sanitized or controlled.

## 2025-05-14 - Event Delegation
**Learning:** Attaching a single event listener to a parent container is more memory-efficient and faster to initialize than multiple inline `onclick` handlers, especially as the number of interactive elements grows.
**Action:** Refactor inline handlers to use event delegation with data attributes.
