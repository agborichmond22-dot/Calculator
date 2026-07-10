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
  if (!display.value) return;
  try {
    const result = eval(display.value);
    display.value = result === Infinity || result === -Infinity ? "Error" : result;
  } catch (error) {
    display.value = "Error";
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key >= "0" && event.key <= "9") appendToDisplay(event.key);
  if (["+", "-", "*", "/"].includes(event.key)) appendToDisplay(event.key);
  if (event.key === ".") appendToDisplay(".");
  if (event.key === "Enter") {
    if (document.activeElement.tagName !== "BUTTON") {
      calculate();
    }
  }
  if (event.key === "Backspace") deleteLast();
  if (event.key === "Escape") clearDisplay();
});
