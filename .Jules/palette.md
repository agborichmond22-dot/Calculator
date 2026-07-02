## 2025-05-15 - Calculator Accessibility and Keyboard Support
**Learning:** For interactive applications like a calculator, adding `aria-live="polite"` to the display ensures results are announced by screen readers. When adding global keyboard shortcuts, it's critical to check `document.activeElement` before calling `event.preventDefault()` on keys like `Enter` to avoid breaking standard button activation.
**Action:** Always verify if a button is focused before overriding the `Enter` key behavior in global listeners.
