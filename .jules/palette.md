## 2025-05-15 - [Keyboard Accessibility & Interaction]
**Learning:** Adding global keyboard listeners requires careful handling of the 'Enter' key to avoid double-triggering when a button is already focused (browsers trigger 'onclick' on Enter for focused buttons).
**Action:** Use `document.activeElement.tagName !== 'BUTTON'` check in the 'Enter' key handler.

## 2025-05-15 - [Line Count Constraint & Reformatting]
**Learning:** Automatic reformatting (e.g. changing indentation or line endings) can quickly exceed line count constraints (e.g. < 50 lines) even for small functional changes.
**Action:** Use targeted replacements or manual edits to keep diffs minimal when strict line constraints are in place, instead of full file rewrites.
