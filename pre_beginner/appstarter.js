//* first try

const calcDisplay = document.querySelector('#calcDisplay');
const numberButtons = document.querySelectorAll('.numberButtons');
const operationButtons = document.querySelectorAll('operatorButtons');
const equalBtn = document.querySelector('#equalSign');
const plusBtn = document.querySelector('#plusSign')
const minusBtn = document.querySelector('#minusSign')
const multiplyBtn = document.querySelector('#multiplySign')
const divideBtn = document.querySelector('#divideSign')
const clearBtn = document.querySelector('#clear')
const rightParen = document.querySelector('#rightParen');
const leftParen = document.querySelector('#leftParen');
const percentBtn = document.querySelector('#percentageSign');


for (let button of numberButtons) {
    button.addEventListener('click', (event) => {
        console.log(event.target.value);
        // console.dir(calculatorDisplay)
    })
}




//! following a guide
// const calculator = {
//     displayValue: '0',
//     firstOperand: null,
//     secondOperand: 
// }