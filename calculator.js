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
  // Early return if display is empty or already shows an error to avoid unnecessary processing
  if (!display.value || display.value === "Error") return;

  // Performance optimization: if the value is already a number, don't use eval()
  // Benchmarking showed isNaN() check is significantly faster than eval() for numeric strings
  if (!isNaN(display.value)) return;

  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
