const display = document.getElementById("display");

function appendToDisplay(input){
display.value += input;
} 

function clearDisplay(){
display.value = "";
}

function calculate(){
try {
    display.value = eval(display.value);
} catch (error) {
    display.value = "Error";
}
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (/[0-9]/.test(key)) {
        appendToDisplay(key);
    } else if (["+", "-", "*", "/"].includes(key)) {
        appendToDisplay(key);
    } else if (key === ".") {
        appendToDisplay(key);
    } else if (key === "Enter" || key === "=") {
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});