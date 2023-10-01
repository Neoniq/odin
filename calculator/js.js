const DISPLAY = document.querySelector('.display')
const CALCULATOR = document.querySelector('.calculator')

let displayValue = ''
let firstNum = ''
let secondNum = ''
let operator = ''
let firstNumDone = false

function add(a, b) { return a + b }
function subtract(a, b) { return a - b }
function multiply(a, b) { return a * b }
function divide(a, b) { return a / b }
function jopa(jopa) { console.log(jopa, 'в квадрате'); }

function operate(operator, a, b) {
    return operator(a, b)
}

function showOnDisplay(params) {
    DISPLAY.textContent = params
}

CALCULATOR.addEventListener('click', ev => {
    const elClass = ev.target.classList

    if (elClass.contains('digit')) {
        !firstNumDone
            ? firstNum += ev.target.textContent
            : secondNum += ev.target.textContent
    }
    if (elClass.contains('operator')) {
        operator = ev.target.textContent
        firstNumDone = true
    }

    displayValue =
        `${firstNum} ${operator} ${secondNum}`
    showOnDisplay(displayValue)
})
showOnDisplay('Ready!')


