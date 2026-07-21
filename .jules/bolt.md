# Bolt's Performance Journal

## 2026-06-29 - Initializing Journal
**Learning:** Bypassing `eval()` with regex checks (e.g. for numeric identities and simple binary operations) avoids the heavy JS parsing overhead and prevents octal/leading-zero parsing bugs, significantly improving performance.
**Action:** Implement numeric identity and simple binary expression regex bypasses in `calculate()` and ensure strict `Number.isFinite()` checking on primitive values to guard against invalid inputs and division by zero.
