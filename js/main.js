//add listeners to buttons to collect user input
const buttons = document.querySelectorAll('.key')
buttons.forEach(button => button.addEventListener('click', selectElement))
const displayInput = document.querySelector('#input')
const displayResult = document.querySelector('#result')

//store button clicks in string and variables to create expression
let input = ''
let firstNum, secondNum, symbol
function selectElement(e) {
    let pressed = e.target.innerText
    if ('+-x/^'.includes(pressed) && !symbol) {
        displayInput.innerText += pressed
        firstNum = input
        input = ''
        symbol = pressed
    } else if ('+-x/^'.includes(pressed) && symbol) {
        displayInput.innerText += pressed
        secondNum = input
        firstNum = operate(firstNum, secondNum, symbol)
        symbol = pressed
        secondNum = ''
        input = ''
    } else if (pressed === '!') {
        displayInput.innerText += pressed
        firstNum = input
        input = ''
        symbol = pressed
        operate(firstNum, '', symbol)
    } else if (pressed === '=') {
        if (firstNum && symbol && input) {
            displayInput.innerText += pressed
            secondNum = input
            input = ''
            operate(firstNum, secondNum, symbol)
        } 
    } else {
        displayInput.innerText += pressed
        input += pressed
    }
    return firstNum, secondNum, symbol
}

//evaluate expression once user has entered both numbers and operation and pressed equals
function operate(num1, num2, operation) {
    if (operation === '+') {
        displayResult.innerText = add(+num1, +num2)
        return add(+num1, +num2)
    } else if (operation === '-') {
        displayResult.innerText = subtract(num1, num2)
        return subtract(num1, num2)
    } else if (operation === 'x') {
        displayResult.innerText = multiply(num1, num2)
        return multiply(num1, num2)
    } else if (operation === '/') {
        displayResult.innerText = divide(num1, num2)
        return divide(num1, num2)
    } else if (operation === '^') {
        displayResult.innerText = exponent(num1, num2)
        return exponent(num1, num2)
    } else if (operation === '!') {
        displayResult.innerText = factorial(+num1)
        console.log(factorial(+num1))
        return factorial(num1)
    }
}

//Operation Functions
const add = (a, b) => (a + b) % 1 === 0 ? a + b : (a + b).toFixed(10)
const subtract = (a, b) => (a - b) % 1 === 0 ? a - b : (a - b).toFixed(10)
const multiply = (a, b) => (a * b) % 1 === 0 ? a * b : (a * b).toFixed(10)
const divide = (a, b) => (a / b) % 1 === 0 ? a / b : (a / b).toFixed(10)
const exponent = (a, b) => (a ^ b) % 1 === 0 ? a ** b : (a ** b).toFixed(10)
const factorial = (a) => [...new Array(a).keys()].map(e => e + 1).reduce((a, c) => a * c, 1)


//Todo:
//Make it so user can't enter operation first, except for negative
//make it so user can't enter two operations in a row
//rest of odin project steps