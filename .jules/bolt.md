## 2026-07-10 - Bypassing eval() for numeric identity operations
**Learning:** Using `eval()` for numeric strings is significantly slower (~3x in this environment) than `Number(input).toString()` because it invokes the full JS parser and compiler. However, direct returns must be avoided if normalization (e.g. "007" -> "7") is expected, as `eval()` handles this by default.
**Action:** Use `if (!isNaN(input)) { display.value = Number(input).toString(); return; }` to optimize identity operations in calculator-like apps while maintaining behavioral parity with `eval()`.
