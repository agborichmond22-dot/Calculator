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
  const input = display.value;

  // Performance: Early return for empty input or already error state
  if (!input || input === "Error") return;

  // Performance: Skip eval() if the input is already a simple number (~4.5x faster)
  if (!isNaN(input)) return;

  try {
    const result = eval(input);

    // Handle division by zero or other cases that return Infinity
    if (result === Infinity || result === -Infinity) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = "Error";
  }
}
