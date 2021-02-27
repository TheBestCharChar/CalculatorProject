const calculator = {
    displayValue: '0', //how to keep track of what's being displayed on the screen
    firstOperand: null, //first operand for any expression
    waitingForSecondOperand: false, //checking if both the first operand and the operator has been inputted. if true, the next numbers that the user enters will constitute the second operand
    operator: null, //store the operator for an expression
};

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

function updateDisplay() {
    calcDisplay.value = calculator.displayValue;
}
updateDisplay();

const keys = document.querySelector('.calculator-keys');

// for (let key of keys) {
//     key.addEventListener('click', (e) => {
//         console.dir(e);
//     })
// }

keys.addEventListener('click', (event) => {
    const {
        target
    } = event; //desctructuring the event object and looking for the target property of the click event 
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operatorButtons')) {
        console.log('operatorButtons', target.value);
        return;
    }
    if (target.classList.contains('decimal')) {
        console.log('decimal', target.value);
        return;
    }
    if (target.classList.contains('clear')) {
        console.log('clear', target.value);
        return;
    }
    console.log('button', target.value)

})

//second try