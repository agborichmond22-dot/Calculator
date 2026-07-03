## 2025-05-14 - DOM Access vs State Variable Bottleneck
**Learning:** In this vanilla JS environment, repeated DOM property access (like `input.value += char`) is extremely slow compared to local JS state updates. A benchmark showed a 3300x performance difference for 50k operations.
**Action:** Always prefer local state variables for intermediate computations and update the DOM only once per user interaction or when the final state is reached.
