## 2025-05-14 - Accessible Calculator Displays
**Learning:** Using `aria-live="polite"` on a readonly input used as a display ensures that dynamic updates (like button presses or calculation results) are announced by screen readers without stealing focus or being aggressive.
**Action:** Always include `aria-live` and a descriptive `aria-label` on non-interactive display elements that show the result of user actions.
