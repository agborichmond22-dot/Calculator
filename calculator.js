const display = document.getElementById("display");

/**
 * Appends a character or string to the calculator display.
 * @param {string} input - The value to append.
 */
function appendToDisplay(input) {
    display.value += input;
}

/**
 * Clears the calculator display.
 */
function clearDisplay() {
    display.value = "";
}

/**
 * Deletes the last character from the calculator display.
 */
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

/**
 * Calculates the result of the expression in the display.
 * Uses a regex bypass for simple numeric inputs to improve performance and avoid eval() overhead.
 */
function calculate() {
    const input = display.value;

    if (!input) {
        return;
    }

    try {
        // Performance Optimization: Bypass eval() for simple numeric identity operations.
        // This avoids the overhead of the JavaScript parser and prevents eval() from
        // interpreting leading zeros as octal literals.
        const isNumeric = /^-?\d*\.?\d+$/.test(input);

        if (isNumeric) {
            display.value = Number(input).toString();
        } else {
            const result = eval(input);
            // Handle division by zero which returns Infinity/NaN in JS eval()
            if (result === Infinity || result === -Infinity || isNaN(result)) {
                display.value = "Error";
            } else {
                display.value = result;
            }
        }
    } catch (error) {
        display.value = "Error";
    }
}
