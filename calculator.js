/**
 * Calculator logic optimized for performance and maintainability.
 * Uses event delegation to minimize event listener overhead and
 * local state to reduce redundant DOM property access.
 */

const display = document.getElementById("display");
const keys = document.getElementById("keys");

// Cache the current expression to minimize redundant DOM reads/writes
let currentExpression = "";

// Event delegation: single listener on the parent container
keys.addEventListener("click", (event) => {
    const { target } = event;
    if (!target.matches("button")) return;

    const { action, value } = target.dataset;

    if (value) {
        appendToDisplay(value);
    } else if (action === "clear") {
        clearDisplay();
    } else if (action === "delete") {
        deleteLast();
    } else if (action === "calculate") {
        calculate();
    }
});

/**
 * Appends input to the current expression and updates display.
 * @param {string} input
 */
function appendToDisplay(input) {
    currentExpression += input;
    updateDisplay();
}

/**
 * Resets the calculator state.
 */
function clearDisplay() {
    currentExpression = "";
    updateDisplay();
}

/**
 * Removes the last character from the current expression.
 */
function deleteLast() {
    if (currentExpression.length > 0) {
        currentExpression = currentExpression.slice(0, -1);
        updateDisplay();
    }
}

/**
 * Evaluates the current expression and updates the display with the result.
 */
function calculate() {
    if (!currentExpression) return;
    try {
        // Eval is used here as it's a simple calculator, but we evaluate
        // the locally cached string to avoid DOM-induced latency.
        const result = eval(currentExpression);
        currentExpression = String(result);
        updateDisplay();
    } catch (error) {
        display.value = "Error";
        currentExpression = "";
    }
}

/**
 * Centralized DOM update to maintain synchronization between state and UI.
 */
function updateDisplay() {
    display.value = currentExpression;
}
