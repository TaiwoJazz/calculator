const displayValue = document.querySelectorAll('.val');
const display = document.querySelector('.calculator__display');
let deleteNumber = document.querySelector('.delete');
let clear = document.querySelector('.clear');

let numbers = [];

deleteNumber.addEventListener('click', backspaceDisplay)
clear.addEventListener('click', clearDisplay)

displayValue.forEach(val => {
  val.addEventListener('click', function(e) {
    let x = e.currentTarget.value
    numbers.push(x);
    updateDisplay();
  })
});

const updateDisplay = () => {
  display.textContent = numbers.join('')
  if (numbers.length == 0) {
    display.textContent = 0
  }
}

function backspaceDisplay() {
  numbers.pop()
  updateDisplay();
}

function clearDisplay() {
  numbers = [];
  updateDisplay(); 
}

