const buttons = document.querySelectorAll('.key')
buttons.forEach(button => button.addEventListener('click', selectElement))

let input = ''
let firstNum, secondNum, symbol
function selectElement(e) {
    if ('+-x/'.includes(e.target.innerText)) {
        firstNum = input
        input = ''
        symbol = e.target.innerText
    } else if (e.target.innerText === '=') {
        secondNum = input
        input = ''
    } else {
        input += e.target.innerText
    }
    return firstNum, secondNum, symbol
}
