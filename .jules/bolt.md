# Bolt's Journal - Critical Learnings

## 2025-07-12 - Numeric Evaluation Bypass
**Learning:** In this environment, `eval()` has significant overhead (~3x slower) compared to a simple regex check and `Number()` conversion for plain numeric strings. This is especially relevant for calculators where users might repeatedly press "=" on a result.
**Action:** Always implement a regex bypass for static numeric inputs before falling back to `eval()` for complex expressions.
