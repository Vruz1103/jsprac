const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

let currentValue = "0";
let operation = null;
let firstOperand = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        updateDisplay(value);
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        handleOperation(value);
        break;
      case "=":
        calculateResult();
        break;
      case "C":
        clearDisplay();
        break;
    }
  });
});

function updateDisplay(value) {
  if (currentValue === "0") {
    currentValue = value;
  } else {
    currentValue += value;
  }
  display.textContent = currentValue;
}

function handleOperation(op) {
  if (operation !== null) {
    calculateResult();
  }
  operation = op;
  firstOperand = parseFloat(currentValue);
  currentValue = "0";
}

function calculateResult() {
  if (operation === null || firstOperand === null) return;

  const secondOperand = parseFloat(currentValue);
  let result;

  switch (operation) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    case "/":
      result = firstOperand / secondOperand;
      break;
  }

  display.textContent = result.toString();
  currentValue = result.toString();
  operation = null;
  firstOperand = null;
}

function clearDisplay() {
  currentValue = "0";
  operation = null;
  firstOperand = null;
  display.textContent = currentValue;
}
