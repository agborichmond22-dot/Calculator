const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.toString().slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

document.addEventListener("keydown", (event) => {
  const key = event.key;
  const isButtonFocused = document.activeElement && document.activeElement.tagName === "BUTTON";

  if (/[0-9]/.test(key)) {
    appendToDisplay(key);
  } else if (["+", "-", "*", "/"].includes(key)) {
    appendToDisplay(key);
  } else if (key === ".") {
    appendToDisplay(".");
  } else if (key === "Enter") {
    if (!isButtonFocused) {
      event.preventDefault();
      calculate();
    }
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape" || key.toLowerCase() === "c") {
    clearDisplay();
  }
});
