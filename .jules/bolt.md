## 2025-05-14 - Optimize eval() in arithmetic apps
**Learning:** Calling `eval()` on every interaction in a calculator app introduces unnecessary overhead, especially for empty inputs or results that are already numeric. Bypassing `eval()` for these cases prevents redundant parsing and DOM writes.
**Action:** Use `!display.value || !isNaN(display.value)` as an early return guard in calculation functions to skip `eval()` for static or empty states.
