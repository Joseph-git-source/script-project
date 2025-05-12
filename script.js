// script.js
let display = document.getElementById('display');

// Append input to the display
function appendToDisplay(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Perform the calculation
function calculate() {
  try {
    let result = eval(display.value); // Use eval to evaluate the expression
    if (isNaN(result) || !isFinite(result)) {
      throw new Error('Invalid operation');
    }
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}