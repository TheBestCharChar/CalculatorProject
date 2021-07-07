function addNum(a, b) {
    return a + b;
}

function subtractNum(a, b) {
    return a - b;
}

function multiplyNum(a, b) {
    return a * b;
}

function divideNum(a, b) {
    return a / b;
}

function operate(num1, num2, operator) {
    return operator(num1, num2);
}


let displayValue = document.querySelector('.calcDisplay');
let operatorValue = "";
let firstNumber = 0;
let secondNumber = 0;

//? Distinguish between first and second operand
let isSecondOperand = false;

//*pseudocode
//? First Number Display
//  Button Click on Number
const numButtons = document.querySelectorAll('.numBtns');
for (const numButton of numButtons) {
    numButton.addEventListener('click', (e) => {
        // if (isSecondOperand = false) {
        displayValue.innerText += e.target.innerText;
        displayValue.innerText = parseInt(displayValue.innerText)
        // }
        //  else if (isSecondOperand = true) {
        //     displayValue.innerText = 0;
        //     displayValue.innerText += e.target.innerText;
        //     displayValue.innerText = parseInt(displayValue.innerText);
        // }
    })
}

//? Operator click

const operatorBtns = document.querySelectorAll('.operatorBtns');
for (operatorBtn of operatorBtns) {
    operatorBtn.addEventListener('click', (e) => {
        // operator button clicked should be stored as the operator value 
        switch (operatorValue = e.target.innerText) {
            case "/":
                operatorValue = divideNum;
                break;
            case "*":
                operatorValue = multiplyNum;
                break;
            case "-":
                operatorValue = subtractNum;
                break;
            case "+":
                operatorValue = addNum;
                break;
        }
        // Store displayed value as first value if isSecondOperand
        firstNumber = parseInt(displayValue.innerText);

    })
}


//? 2nd number Display

//  Clear display value 
//  number(s) clicked should appear in calc display
//
//? equal sign
//  call function operate on stored first values and second values with the stored operator value
const equalsBtn = document.querySelector('#equalBtn');
equalsBtn.addEventListener('click', (e) => {
    displayValue.innerText = operate(firstNumber, secondNumber, operatorValue);
    // console.log(e);
})
// 
// 

//? clear calculator
// when clicking button 'AC':
const clearCalc = document.querySelector('#clearCalcBtn');
//  clear display Value
clearCalc.addEventListener('click', (e) => {
    displayValue.innerText = 0;
    // clear first number value
    firstNumber = 0;
    //  clear operator value
    operatorValue = "";
    secondNumber = 0;
})