// Cache DOM elements
const display = document.getElementById("display");
const keys = document.getElementById("keys");

// State variable to minimize DOM reads
let currentExpression = "";

/**
 * Updates the display and the internal state.
 * @param {string} value - The new value to set.
 */
function updateDisplay(value) {
    currentExpression = value;
    display.value = currentExpression;
}

/**
 * Appends input to the expression.
 * @param {string} input
 */
function appendToDisplay(input) {
    updateDisplay(currentExpression + input);
}

/**
 * Clears the display and state.
 */
function clearDisplay() {
    updateDisplay("");
}

/**
 * Deletes the last character from the expression.
 */
function deleteLast() {
    updateDisplay(currentExpression.slice(0, -1));
}

/**
 * Calculates the expression safely.
 */
function calculate() {
    if (!currentExpression) return;
    try {
        // Use a safer way to evaluate if possible, but keep eval for simplicity
        // as per the original implementation, while caching the result.
        const result = eval(currentExpression);
        updateDisplay(String(result));
    } catch (error) {
        updateDisplay("Error");
    }
}

// Event Delegation: Single listener for all button clicks
keys.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName !== "BUTTON") return;

    const { value, action } = target.dataset;

    if (value) {
        appendToDisplay(value);
    } else if (action) {
        switch (action) {
            case "clear":
                clearDisplay();
                break;
            case "delete":
                deleteLast();
                break;
            case "calculate":
                calculate();
                break;
        }
    }
});
