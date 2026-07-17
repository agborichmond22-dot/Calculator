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
    const input = display.value.trim();
    if (!input) {
        return;
    }
    try {
        // Bypass eval for direct numeric inputs
        if (/^-?\d*\.?\d+$/.test(input)) {
            display.value = Number(input).toString();
            return;
        }

        const result = eval(input);
        if (result === undefined || result === null || !Number.isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}
