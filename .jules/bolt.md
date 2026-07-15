## 2026-07-14 - Eval Bypass for Numeric Identity
**Learning:** `eval()` is significantly slower (~5x-7x) than `Number()` for simple numeric strings in this environment and incorrectly parses leading zeros as octals (e.g., "012" becomes 10).
**Action:** Implement regex-based bypasses (`/^-?\d*\.?\d+$/`) for simple numeric operations to improve both performance and correctness in calculator-like applications.

## 2026-07-14 - Artifact Cleanup
**Learning:** Committing temporary verification artifacts (e.g., `server.log`, `benchmark.js`, `verify_*.py`) is a major anti-pattern and blocks PR approval.
**Action:** Explicitly delete all temporary files and logs created during the verification process before calling the submit tool.
