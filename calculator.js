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
    display.value = display.value.toString().slice(0, -1);
}

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (key >= "0" && key <= "9") {
        appendToDisplay(key);
    } else if (["+", "-", "*", "/"].includes(key)) {
        appendToDisplay(key);
    } else if (key.toLowerCase() === "x") {
        appendToDisplay("*");
    } else if (key === ".") {
        appendToDisplay(".");
    } else if (key === "Enter") {
        if (document.activeElement.tagName !== "BUTTON") {
            calculate();
        }
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});