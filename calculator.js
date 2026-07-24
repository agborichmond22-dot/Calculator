// Selected optimization: Bypassing eval() for numeric identity and simple binary expressions.
// This significantly reduces parse/execution time by avoiding the JS parser.
// In addition, the deleteLast() function is implemented to allow deleting the last character.

const display = document.getElementById("display");

// Regex patterns to identify expressions we can optimize without eval()
// Ensure operands contain at least one digit to avoid incorrect empty-operand evaluations.
const NUMERIC_REGEX = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/;
const BINARY_REGEX = /^([+-]?(?:\d+(?:\.\d*)?|\.\d+))\s*([\+\-\*\/])\s*([+-]?(?:\d+(?:\.\d*)?|\.\d+))$/;

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

/**
 * Removes the last character from the display.
 */
function deleteLast() {
    if (display.value) {
        display.value = display.value.slice(0, -1);
    }
}

/**
 * Calculates the expression on the display.
 * Employs a fast regex bypass for common patterns to bypass eval().
 */
function calculate() {
    const input = display.value;
    if (!input) return;

    try {
        // 1. Numeric Identity Bypass (e.g., "123", "0.45", "-9")
        // Bypassing eval() avoids JS parser overhead and handles octal numbers correctly (avoiding octal conversion).
        if (NUMERIC_REGEX.test(input)) {
            const val = Number(input);
            if (Number.isFinite(val)) {
                display.value = val.toString();
                return;
            }
        }

        // 2. Simple Binary Operator Bypass (e.g., "12+34", "100/5")
        const match = input.match(BINARY_REGEX);
        if (match) {
            const a = Number(match[1]);
            const op = match[2];
            const b = Number(match[3]);

            if (Number.isFinite(a) && Number.isFinite(b)) {
                let res;
                switch (op) {
                    case '+':
                        res = a + b;
                        break;
                    case '-':
                        res = a - b;
                        break;
                    case '*':
                        res = a * b;
                        break;
                    case '/':
                        if (b === 0) {
                            display.value = "Error"; // Avoid division by zero returning Infinity to the user
                            return;
                        }
                        res = a / b;
                        break;
                    default:
                        // Fall back to eval safety net if operator mismatch occurs
                        throw new Error("Invalid operator");
                }

                if (Number.isFinite(res)) {
                    display.value = res.toString();
                    return;
                }
            }
        }

        // Fallback safety net for complex inputs or edge cases (e.g., incomplete or invalid inputs will correctly go here and fail / throw Error)
        const result = eval(input);
        if (result === undefined) {
            display.value = "";
        } else if (!Number.isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result.toString();
        }
    } catch (error) {
        display.value = "Error";
    }
}
