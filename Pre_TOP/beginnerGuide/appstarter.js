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

function updateDisplay() { //making so that the DOM selecting calcDisplay will be equal to the object calculator's displayValue.
    calcDisplay.value = calculator.displayValue;
}
updateDisplay(); //we want to call it so that it's 'there'.

//* this is to check the button and check if specific buttons contain a certain class.
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event; //desctructuring the event object and looking for the target property of the click event 

    if (!target.matches('button')) { // this is checking if it's a button that was clicked
        return;
    } else if (target.classList.contains('operatorButtons')) {
        // console.log('operator', target.value);
        handleOperator(target.value);
        updateDisplay();
        return;
    } else if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay()
        return;
        // } else if (target.classList.contains('equals')) {
        //     console.log('equals', target.value);
        //     return;
        // } else if (target.classList.contains('percentageSign')) {
        //     console.log('percentage', target.value);
        //     return;
    } else if (target.classList.contains('rightParen')) {
        // console.log('rightParenthesis', target.value);
        inputRightParenthesis(target.value);
        updateDisplay();
        return;
    } else if (target.classList.contains('leftParen')) {
        // console.log('leftParenthesis', target.value);
        inputLeftParenthesis(target.value);
        updateDisplay();
        return;
    } else if (target.classList.contains('clear')) {
        // console.log('clear', target.value)
        resetCalculator();
        updateDisplay();
        return;
    } else
        // console.log('digit',target.value)
        inputDigit(target.value);
    updateDisplay();
})

//* overwrite calculator (object) displayValue  if the current value is 0 with digit. Otherwise append via concatenate
function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator; //adding waitingForSecondOperand allows us to manipulate it
    if (waitingForSecondOperand === true) { //when clicking on secondOperand (number), the second number becomes the displayValue and toggle bcomes false.
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit; //ternary operator . 
        //? calculator.displayValue will either equal digit or concatenate digit depending on if the displayValue is = to 0. 
    }
    console.log(calculator);
}

//* function that concatenates decimal point to calculator.displayValue if there is not already a decimal in the displayValue.
function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) { //getting rid of the decimal bug
        calculator.displayValue = '0.';
        calculator.waitingForSecondOperand = false;
        return
    }
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

function inputLeftParenthesis(leftSide) {
    const { displayValue } = calculator;
    calculator.displayValue = displayValue === '0' ? leftSide :
        displayValue + leftSide;
}

function inputRightParenthesis(rightSide) {
    const { displayValue } = calculator;
    calculator.displayValue = displayValue === '0' ? rightSide :
        displayValue + rightSide;
}

// function inputPercentage (percent) {
//     const { displayValue } = calculator;

// }

//* handling operators
function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    if (operator && calculator.waitingForSecondOperand) { //checks if an operator exists and if waitingforSecond Operand is toggled to true.
        calculator.operator = nextOperator;
        console.log(calculator);
        return;
    }
    //!verify that the firstOperand is null and that the inputValue is not a NaN value
    if (firstOperand === null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue; //when clicking an operator, it should put the update FirstOperand with inputValue which is the displayValue (numbers) 
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);
        calculator.displayValue = String(result); //! why use String here? because then we can keep concatenating items if necessary
        calculator.firstOperand = result;
    }
    calculator.waitingForSecondOperand = true; //indicates that the first operand has been entered and whatever digits enteres next will be the second operand
    calculator.operator = nextOperator;
    console.log(calculator);
}

function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
        return firstOperand + secondOperand;
    } else if (operator === '-') {
        return firstOperand - secondOperand;
    } else if (operator === '*') {
        return firstOperand * secondOperand;
    } else if (operator === '/') {
        return firstOperand / secondOperand;
    } else if (operator === '%') {
        return firstOperand * 0.01; //!parenthesis needs to be worked on
    }

    return secondOperand;
}

function resetCalculator() {
    calculator.displayValue = '0'; //we want it to be a string so that it can be concatenated with others (decimal) 
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
}