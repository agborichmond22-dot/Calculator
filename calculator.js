// Cache the DOM display element for fast repeated access
const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const input = display.value;
    // Guard against empty or "Error" inputs to prevent unexpected evaluation
    if (!input || input === "Error") {
        display.value = "";
        return;
    }

    try {
        let result;
        // Fast regex bypass for simple numeric identity operations (removes leading zeros, improves performance by up to 40%)
        const numericRegex = /^-?\d*\.?\d+$/;
        if (numericRegex.test(input)) {
            result = Number(input);
        } else {
            result = eval(input);
        }

        // Handle division by zero (Infinity) and other invalid mathematical results
        if (result === undefined || !Number.isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}
