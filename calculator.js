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
    if (display.value === "") return;
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// Global keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (/[0-9]/.test(key)) {
    appendToDisplay(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    appendToDisplay(key);
  } else if (key === "x" || key === "X") {
    appendToDisplay("*");
  } else if (key === ".") {
    appendToDisplay(".");
  } else if (key === "Enter") {
    // Only calculate if a button is not focused to avoid double-triggering
    if (document.activeElement.tagName !== "BUTTON") {
      calculate();
    }
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
