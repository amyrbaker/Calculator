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
        console.log(calculate(firstNum, secondNum, symbol))
    } else {
        input += e.target.innerText
    }
    return firstNum, secondNum, symbol
}

//evaluate expression once user has entered both numbers and operation and pressed equals
function calculate(num1, num2, operation) {
    if (operation === '+') {
        return +num1 + +num2
    } else if (operation === '-') {
        return +num1 - +num2
    } else if (operation === 'x') {
        return +num1 * +num2
    } else if (operation === '/') {
        return +num1 / +num2
    }
}