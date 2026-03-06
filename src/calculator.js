// Supported operations: + (addition), - (subtraction), * (multiplication), / (division).
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }

  return a / b;
}

function calculate(operation, a, b) {
  switch (operation) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      throw new Error("Unsupported operation. Use one of: +, -, *, /");
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  calculate,
};
