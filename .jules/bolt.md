## 2025-05-14 - eval() vs isNaN() bypass performance
**Learning:** In this environment, `eval()` is significantly slower (~2.6x to 38x depending on load) than using `isNaN()` for pure numeric strings. Even for simple arithmetic, the parsing overhead of `eval()` is measurable.
**Action:** Implement early returns or fast-path bypasses for static results or already-calculated values before calling `eval()` in interactive applications.
