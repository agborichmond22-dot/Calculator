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
    if (!input) return;

    try {
        // Performance Optimization: Bypass eval() for simple numeric inputs.
        // A regex check is ~3x faster than eval() for numeric strings.
        if (/^-?\d*\.?\d+$/.test(input)) {
            display.value = Number(input).toString();
            return;
        }

        const result = eval(input);

        // Handle division by zero or invalid calculations that return Infinity/NaN
        if (!Number.isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}
