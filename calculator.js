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

function calculate(){
try {
    const input = display.value.trim();
    if (!input) {
        display.value = "";
        return;
    }

    // Bypass 1: Single numeric value (e.g. "123", "-45.6")
    // This normalizes leading zeros and handles simple identification.
    const numericRegex = /^-?\d*\.?\d+$/;
    if (numericRegex.test(input)) {
        const num = Number(input);
        if (Number.isFinite(num)) {
            display.value = num.toString();
            return;
        }
    }

    // Bypass 2: Simple binary arithmetic operation (e.g. "12+34", "-1.5 * 3")
    const arithmeticRegex = /^(-?\d*\.?\d+)\s*([\+\-\*\/])\s*(-?\d*\.?\d+)$/;
    const match = input.match(arithmeticRegex);
    if (match) {
        const a = Number(match[1]);
        const op = match[2];
        const b = Number(match[3]);

        let result;
        if (op === '+') {
            result = a + b;
        } else if (op === '-') {
            result = a - b;
        } else if (op === '*') {
            result = a * b;
        } else if (op === '/') {
            if (b === 0) {
                display.value = "Error";
                return;
            }
            result = a / b;
        }

        if (Number.isFinite(result)) {
            display.value = result.toString();
            return;
        }
    }

    // Fallback for complex expressions
    const result = eval(input);
    if (Number.isFinite(result)) {
        display.value = result.toString();
    } else {
        display.value = "Error";
    }
} catch (error) {
    display.value = "Error";
}
}
