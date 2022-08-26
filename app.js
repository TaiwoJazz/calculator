
const operators = document.querySelectorAll(".operator");
const operations = document.querySelectorAll(".val");
const digits = document.querySelectorAll(".digit");
const displayAns = document.querySelector(".calculator__display__ans");
const display = document.querySelector(".calculator__display");
const deleteItem = document.querySelector(".delete");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");

let numbers = [];
let currentOperator = [];
let displayOperation = [];

deleteItem.addEventListener("click", backspace);
clear.addEventListener("click", clearDisplay);
equal.addEventListener("click", equalto);

operations.forEach((val) => {
  val.addEventListener("click", function (e) {
    let x = e.currentTarget.value;
    displayOperation.push(x);
    if (x === "0" && x === displayOperation[0]) {
      display.textContent = 0
      displayOperation = [];
    } else if (x === "." && x === displayOperation[0]) {
      display.textContent = 0.
      displayOperation = ["0."];
    } else {
      display.textContent = displayOperation.join("")
    }
    if (displayOperation.length > 22) {
      alert("Stop, the screen cannot take more then 22 characters")
    }
  });
});

function backspace() {
  numbers.pop();
  displayOperation.pop();
  currentOperator.pop();
  display.textContent = displayOperation.join("")
}

function clearDisplay() {
  numbers = [];
  currentOperator = [];
  displayOperation = [];
  displayAns.textContent = "";
  display.textContent = 0;
}

function inputDigit() {
  digits.forEach((num) => {
    num.addEventListener("click", function (e) {
      let x = e.currentTarget.value;
      if (x === "0" && x === numbers[0]) {
        numbers = [];
      } else if (x === "." && x === numbers[0]) {
        numbers = [];
      } else {
        numbers.push(x)
      }
    });
  });
}
inputDigit();

function getAns(ans) {
  displayAns.textContent = ans;
  displayAns.length = 15
  numbers = [];
  numbers.push(ans);
}


function equalto() {
  let num2 = Number(numbers.join(""));

  let operator = currentOperator;

  if (operator == "+") {
    let ans = num1 + num2;
    getAns(ans);
  } else if (operator == "-") {
    let ans = num1 - num2;
    getAns(ans);
  } else if (operator == "*") {
    let ans = num1 * num2;
    getAns(ans);
  } else if (operator == "÷") {
    let ans = num1 / num2;
    getAns(ans);
  } else {
    display.textContent = "Error";
    numbers = [];
    currentOperator = [];
    displayOperation = [];
    displayAns.textContent = "";
  }
  currentOperator = [];
}

operators.forEach((item) => {
  item.addEventListener("click", items);
  function items(e) {
    let x = e.currentTarget.value;
    currentOperator.push(x);
    window.num1 = Number(numbers.join(""));
    numbers = [];

    let operator = currentOperator;
    if (operator == "%") {
      let ans = num1 / 100;
      getAns(ans);
    }
  }
});
