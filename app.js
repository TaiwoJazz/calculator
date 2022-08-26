const operations = document.querySelectorAll(".val");
const displayAns = document.querySelector(".calculator__display__ans");
const display = document.querySelector(".calculator__display");
const deleteNumber = document.querySelector(".delete");
const clear = document.querySelector(".clear");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");

let numbers = [];
let currentOperator = [];
let displayOperation = [];

deleteNumber.addEventListener("click", backspaceDisplay);
clear.addEventListener("click", clearDisplay);
equal.addEventListener("click", equalto);
//decimal.addEventListener('click', decimalNum);

const updateDisplay = () => {
  display.textContent = numbers.join("");
  if (numbers.length == 0 || numbers.length < 2) {
    display.textContent = 0;
  }
  
};

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

function backspaceDisplay() {
  numbers.pop();
  currentOperator.pop();
  displayOperation.pop();
  updateDisplay();
}

function clearDisplay() {
  numbers = [];
  currentOperator = [];
  displayOperation = [];
  displayAns.textContent = "";
  updateDisplay();
}

function inputDigit() {
  digits.forEach((num) => {
    num.addEventListener("click", function (e) {
      let x = e.currentTarget.value;
      if (x === "0" && x === numbers[0]) {
        numbers = [];
      } else if (x === "." && numbers.length < 2) {
        numbers = ["0."];
        console.log(numbers)
      } else {
        numbers.push(x)
      }
    });
  });
}
inputDigit();

function getAns(ans) {
  displayAns.textContent = ans;
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
