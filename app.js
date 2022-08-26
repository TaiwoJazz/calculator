
const display = document.querySelector('.calculator__display');
const deleteNumber = document.querySelector('.delete');
const clear = document.querySelector('.clear');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');

let numbers = [];
let currentOperator = [];


deleteNumber.addEventListener('click', backspaceDisplay);
clear.addEventListener('click', clearDisplay);

const updateDisplay = () => {
  display.textContent = numbers.join('')
  if (numbers.length == 0) {
    display.textContent = 0
  }
}

function backspaceDisplay() {
  numbers.pop()
  currentOperator.pop();
  updateDisplay();
}

function clearDisplay() {
  numbers = [];
  currentOperator = [];
  updateDisplay();
}

function test1() {
  digits.forEach(num => {
    num.addEventListener('click', function(e) {
      let x = e.currentTarget.value
      numbers.push(x)
      updateDisplay();
    })
  })
}
test1();

equal.addEventListener('click', equalto)
function equalto () {
  let num2 = Number(numbers.join(''));

  let operator = currentOperator

  if (operator == '+') {
    let ans = num1 + num2
    display.textContent = ans
    numbers = [];
    numbers.push(ans)
  } else if (operator == '-') {
    let ans = num1 - num2
    display.textContent = ans
    numbers = [];
    numbers.push(ans)
  } else if (operator == '*') {
    let ans = num1 * num2
    display.textContent = ans
    numbers = [];
    numbers.push(ans)
  } else if (operator == '÷') {
    let ans = num1 / num2
    display.textContent = ans
    numbers = [];
    numbers.push(ans)
  } else {
    display.textContent = 'Error'
  }
  currentOperator = [];
}
  
operators.forEach(item => {
  item.addEventListener('click', items)
  function items(e) {
    let x = e.currentTarget.value
    currentOperator.push(x)
    window.num1 = Number(numbers.join(''));
    display.textContent = currentOperator.join('')
    numbers = [];
  }
});