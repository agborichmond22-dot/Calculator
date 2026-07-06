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
// Performance optimization: Skip eval() for empty inputs or already numeric results
// to avoid redundant parsing and DOM updates.
if (!display.value || !isNaN(display.value)) return;

try {
    display.value = eval(display.value);
} catch (error) {
    display.value = "Error";
}
}
