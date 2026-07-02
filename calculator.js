// BOLT: Performance Optimizations
// 1. Cached DOM elements to avoid repeated lookups
// 2. Used event delegation on #keys to reduce event listener overhead (1 vs 18)

const display = document.getElementById("display");
const keys = document.getElementById("keys");

keys.addEventListener("click", (event) => {
    const { target } = event;
    if (target.tagName !== "BUTTON") return;

    const { value, action } = target.dataset;

    if (value !== undefined) {
        appendToDisplay(value);
    } else if (action !== undefined) {
        handleAction(action);
    }
});

function appendToDisplay(input) {
    display.value += input;
}

function handleAction(action) {
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

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.toString().slice(0, -1);
}

function calculate() {
    if (!display.value) return;
    try {
        // eval is used for simple arithmetic expression parsing
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
