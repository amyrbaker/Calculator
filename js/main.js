//add listeners to buttons to collect user input
const buttons = document.querySelectorAll('.key')
buttons.forEach(button => button.addEventListener('click', selectElement))
const displayResult = document.querySelector('#solution')

//store button clicks in string and variables to create expression
let input = ''
let firstNum, secondNum, symbol
function selectElement(e) {
    displayResult.innerText += e.target.innerText
    if ('+-x/'.includes(e.target.innerText)) {
        firstNum = input
        input = ''
        symbol = e.target.innerText
    } else if (e.target.innerText === '=') {
        secondNum = input
        input = ''
        operate(firstNum, secondNum, symbol)
    } else {
        input += e.target.innerText
    }
    return firstNum, secondNum, symbol
}

//evaluate expression once user has entered both numbers and operation and pressed equals
function operate(num1, num2, operation) {
    if (operation === '+') {
        displayResult.innerText += add(+num1, +num2)
    } else if (operation === '-') {
        displayResult.innerText += subtract(num1, num2)
    } else if (operation === 'x') {
        displayResult.innerText += multiply(num1, num2)
    } else if (operation === '/') {
        displayResult.innerText += divide(num1, num2)
    }
}

//Operation Functions
const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b