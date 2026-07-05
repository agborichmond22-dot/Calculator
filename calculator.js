const display = document.getElementById("display");

function appendToDisplay(input){
    // UX improvement: Clear "Error" if user starts typing again
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    const expression = display.value;

    // Optimization: Early return if display is empty or showing an error
    // to avoid unnecessary eval() overhead and prevent "undefined" results.
    if (!expression || expression === "Error") {
        return;
    }

    // Optimization: If the expression is already just a number, bypass eval().
    // This is a measurable win for redundant clicks on '=' or when no operators are present.
    if (!isNaN(expression)) {
        return;
    }

    try {
        // eval() is used as it is significantly faster than custom parsers for simple arithmetic
        // in this specific sandbox environment.
        const result = eval(expression);

        // Handle cases where eval() returns undefined (e.g., empty string after comment strip)
        if (result === undefined) {
            display.value = "Error";
        } else {
            display.value = String(result);
        }
    } catch (error) {
        display.value = "Error";
    }
}

function deleteLast(){
    // Use substring to remove the last character directly from the DOM to maintain source of truth
    display.value = display.value.slice(0, -1);
}
