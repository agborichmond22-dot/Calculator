## 2025-05-15 - Regex-based eval() bypass
**Learning:** For numeric identity operations, bypassing the JavaScript parser (`eval()`) using a simple regex (`/^-?\d*\.?\d+$/`) is ~35-40% faster than letting the engine parse the string as code. Interestingly, this regex check is also faster than the built-in `isNaN()` function for valid numeric strings in this environment.
**Action:** Use regex fast-paths for common static patterns (like single numbers or simple identities) in performance-sensitive evaluation logic.
