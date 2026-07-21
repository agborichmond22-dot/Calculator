const display = document.getElementById("display");

function appendToDisplay(input){
display.value += input;
}

function clearDisplay(){
display.value = "";
}

function deleteLast(){
display.value = display.value.slice(0, -1);
}

// Regex to bypass eval for numeric identity (e.g. "42", "-15.6")
const numRegex = /^-?\d*\.?\d+$/;

// Regex to bypass eval for simple binary expressions (e.g. "12+34", "-1.5*4")
const binaryRegex = /^(-?\d*\.?\d+)\s*([\+\-\*\/])\s*(-?\d*\.?\d+)$/;

function calculate(){
const input = display.value;
if (!input) {
    return;
}
try {
    let result;
    // 1. Check for numeric identity bypass (removes leading zeros, standardizes formatting)
    if (numRegex.test(input)) {
        result = Number(input);
    }
    // 2. Check for simple binary operations bypass (speed boost, avoids parsing overhead)
    else {
        const match = input.match(binaryRegex);
        if (match) {
            const operand1 = Number(match[1]);
            const operator = match[2];
            const operand2 = Number(match[3]);
            if (operator === "+") result = operand1 + operand2;
            else if (operator === "-") result = operand1 - operand2;
            else if (operator === "*") result = operand1 * operand2;
            else if (operator === "/") result = operand1 / operand2;
        } else {
            // Fallback to eval for more complex expressions
            result = eval(input);
        }
    }

    // Ensure strict verification on primitive result to guard against Infinity or NaN
    if (typeof result === "number" && Number.isFinite(result)) {
        display.value = result.toString();
    } else {
        display.value = "Error";
    }
} catch (error) {
    display.value = "Error";
}
}
