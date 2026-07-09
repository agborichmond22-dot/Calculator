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
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (/[0-9]/.test(key)) {
    appendToDisplay(key);
  } else if (["+", "-", "*", "/", "."].includes(key)) {
    appendToDisplay(key);
  } else if (key === "Enter") {
    // If a button is focused, Enter will already trigger it via click.
    // To avoid double triggering, we check if the focused element is a button.
    if (document.activeElement.tagName !== "BUTTON") {
      calculate();
    }
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
