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
    // Optimization: Skip eval if input is empty or already a number
    if (!input || !isNaN(input)) {
        return;
    }

    try {
        const result = eval(input);
        // Handle division by zero or other cases that return Infinity
        if (result === Infinity || result === -Infinity) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}
