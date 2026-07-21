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
    try {
        if (!display.value) {
            return;
        }
        // Basic check for expression validity and prevent unsafe eval characters
        const sanitized = display.value.replace(/[^0-9+\-*/.]/g, "");
        const result = eval(sanitized);
        if (result === undefined || !Number.isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = Number(result).toString();
        }
    } catch (error) {
        display.value = "Error";
    }
}

document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (key >= "0" && key <= "9") {
        appendToDisplay(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        appendToDisplay(key);
    } else if (key === ".") {
        appendToDisplay(".");
    } else if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape" || key.toLowerCase() === "c") {
        clearDisplay();
    }
});
