## 2025-07-23 - Strict Number.isFinite Validation Constraint
**Learning:** When implementing regex bypass optimizations for `eval()` on numeric identity expressions, strict `Number.isFinite()` validation must be performed directly on primitive number values, as it returns false for coerced numerical string results like '5' and will incorrectly trigger error logic.
**Action:** Always cast/convert coerced numeric values to primitive numbers (e.g., using `Number()`) before validating them with `Number.isFinite()`.
