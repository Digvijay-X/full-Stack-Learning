function calculate(operator) {
  // Variables (number inputs)
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  // Data type conversion (string → number)
  num1 = Number(num1);
  num2 = Number(num2);

  // Variable for result
  let result;

  // Operators
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  }

  // Display result
  document.getElementById("result").innerText = "Result: " + result;
}
