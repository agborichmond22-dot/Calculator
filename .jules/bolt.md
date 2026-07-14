## 2026-07-14 - eval bypass and binary artifacts
**Learning:** Bypassing eval() for numeric identity operations provides a ~60% speedup in benchmarks but may be considered a micro-optimization for human-triggered events. Additionally, committing binary verification artifacts (screenshots) is a major anti-pattern that must be avoided.
**Action:** Frame performance wins in terms of both raw speed and "User Efficiency". Ensure all verification artifacts are cleaned up before PR.
