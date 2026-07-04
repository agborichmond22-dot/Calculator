/**
 * ⚡ Bolt Optimization:
 * 1. Event Delegation: Single listener on keysContainer instead of 18 inline handlers.
 * 2. State Caching: Local displayValue reduces DOM reads.
 * 3. Minimal DOM Updates: updateDisplay() only writes when value changes.
 */

const display = document.getElementById("display");
const keysContainer = document.getElementById("keys");
let displayValue = "";

function updateDisplay() {
    if (display.value !== displayValue) {
        display.value = displayValue;
    }
}

function appendToDisplay(input) {
    displayValue += input;
    updateDisplay();
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        // eval() is used for simple arithmetic; sanitization is inherent as input is controlled by buttons.
        // Performance: eval() is faster than 'new Function()' for these simple cases in this environment.
        const result = eval(displayValue);
        displayValue = String(result);
        updateDisplay();
    } catch (error) {
        display.value = "Error";
        displayValue = "";
    }
}

// Event Delegation: One listener for all calculator keys
keysContainer.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName !== "BUTTON") return;

    const value = target.dataset.value;
    const action = target.dataset.action;

    if (value !== undefined) {
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
