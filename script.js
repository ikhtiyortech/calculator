let result = document.getElementById("result");
let expression = "";

function appendValue(value) {
  expression += value;
  result.value = expression;
}

function appendOperator(operator) {
  expression += operator;
  result.value = expression;
}

function clearResult() {
  expression = "";
  result.value = "";
}

function calculate() {
  try {
    let answer = eval(expression);
    result.value = answer;
    expression = answer;
  } catch (error) {
    result.value = "Error";
    expression = "";
  }
}
