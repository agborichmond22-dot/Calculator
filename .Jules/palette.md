## 2025-05-14 - Playwright Locator Ambiguity with ARIA Labels
**Learning:** In Playwright for Python, `get_by_role("button", name="X")` performs a case-insensitive substring match against the accessible name (including `aria-label`). This can lead to strict mode violations if multiple elements have labels containing the search string (e.g., "C" matching "Clear", "Backspace", "Decimal point", and "Subtract").
**Action:** Use `exact=True` with `get_by_role` or prefer `page.get_by_label("Exact Label")` to ensure unique and resilient locators in tests.

## 2025-05-14 - Accessibility for Symbol-Only Buttons
**Learning:** Buttons using only symbols (⌫, X, +, -) or single letters (C) are inaccessible to screen reader users as they lack a descriptive text name.
**Action:** Always provide `aria-label` attributes for icon-only or symbol-only interactive elements to ensure their purpose is clear to all users.
