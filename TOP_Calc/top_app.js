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

//*pseudocode
//? First Number Display
//  Button Click on Number
const numButtons = document.querySelectorAll('.numBtns');
for (const numButton of numButtons) {
    numButton.addEventListener('click', (e) => {
        displayValue.innerText += e.target.innerText;
        displayValue.innerText = parseInt(displayValue.innerText)
    })
}
//  Number appears in calculator display 
//  setup switch to differentiate between first operand number and second operand nunber
//? Multiple numbers append to each other before Operator Click
//  after append, turn the string to a number to rid the 0 before?


//? Operator click
const operatorBtns = document.querySelectorAll('.operatorBtns');
for (operatorBtn of operatorBtns) {
    operatorBtn.addEventListener('click', (e) => {
        // operator button clicked should be stored as the operator value 
        operatorValue = e.target.innerText;
        // Store displayed value as first value
        firstNumber = displayValue.innerText;
        console.log(firstNumber);
    })
}
//  which will be used in operate function

//? 2nd number Display
//  Clear display value 
//  number(s) clicked should appear in calc display
//
//? equal sign
//  call function operate on stored first values and second values with the stored operator value
// 
// 

//? clear calculator
// when clicking button 'AC':
const clearCalc = document.querySelector('#clearCalcBtn');
//  clear display Value
clearCalc.addEventListener('click', (e) => {
    displayValue.innerText = 0;

})
//  clear operator value