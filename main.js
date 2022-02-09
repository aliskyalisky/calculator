let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let shouldResetScreen = false
let a;
let b;


const numButtons = document.querySelectorAll('[data-number]');
const opButtons = document.querySelectorAll('[data-operator]')
const currentOperationScreen = document.querySelector('.numberselect')
const lastOperationScreen = document.querySelector('.equation');
const clearButton = document.querySelector('.clear');
const backSpaceBtn = document.querySelector('.backspace');
const equalsButton = document.querySelector('.equals')
const copyright = document.querySelector('.copyright');


// LISTENERS

clearButton.addEventListener('click', clear)
backSpaceBtn.addEventListener('click', backSpace)
equalsButton.addEventListener('click', execute)
copyright.addEventListener('click', displayInfo)
numButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)

opButtons.forEach((button) =>
button.addEventListener('click', () => setOperation(button.textContent))
)









// FUNCTIONS

function clear () {
    currentOperationScreen.textContent = ''
  lastOperationScreen.textContent = ''
  firstOperand = ''
  secondOperand = ''
  currentOperation = null
}

function appendNumber(number) { 
    removeInfo();
    if (currentOperationScreen.textContent === '0' || shouldResetScreen) {
    resetScreen() }
    currentOperationScreen.textContent += number;
  }

function setOperation(operator) {
    removeInfo();
    if (currentOperation !== null) evaluate()
    firstOperand = currentOperationScreen.textContent;
    currentOperation = operator;
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`;
    shouldResetScreen = true;
  }

function resetScreen() {
    currentOperationScreen.textContent = ''
    shouldResetScreen = false
  }

function backSpace() {
    currentOperationScreen.textContent = currentOperationScreen.textContent
      .toString()
      .slice(0, -1)
  }

function execute() {
    if (currentOperation === null || shouldResetScreen) return
      secondOperand = currentOperationScreen.textContent;
      currentOperationScreen.textContent = calculate(firstOperand, currentOperation, secondOperand)
      lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
      currentOperation = null
  }
  
function calculate(a, operator, b) {
    a = Number(a);
    b = Number(b);
    let calculation;
    shouldResetScreen = true;

    switch (operator) {
        case '+':
            calculation = a + b;
          return calculation;
        case '-':
            calculation = a - b;
          return calculation;
        case 'x':
            calculation = a * b;
          return calculation
        case '÷':
          if (b === 0 & a === 0) {
              return null
           } else {
               calculation = a / b;
               return calculation;
           }
        default:
          return null
      }
    
}

function displayInfo() {
    currentOperationScreen.textContent = 'Aleksi Liski'
    lastOperationScreen.textContent = 'Made by'
    firstOperand = ''
    secondOperand = ''
    currentOperation = null
    shouldResetScreen = true;
}

function removeInfo() {
    if(currentOperationScreen.textContent === 'Aleksi Liski' ||
    lastOperationScreen.textContent === 'Made by') {
        currentOperationScreen.textContent = '';
        lastOperationScreen.textContent = '';
    }
}

