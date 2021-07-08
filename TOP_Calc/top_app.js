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

//?  Number Display
//  Button Click on Number
const numButtons = document.querySelectorAll('.numBtns');
if (firstNumber === 0 && isSecondOperand == false) {
    for (const numButton of numButtons) {
        numButton.addEventListener('click', (e) => {
            // console.log(e);
            displayValue.innerText += e.target.innerText;
            displayValue.innerText = parseInt(displayValue.innerText)
        })
    }
} else if (isSecondOperand = true && secondNumber === 0) {
    //
    displayValue.innerText = 0;
    displayValue.innerText += e.target.innerText;
    displayValue.innerText = parseInt(displayValue.innerText)

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
        // if clicked sign and firstNumber has nothing stored, store displayed value as firstNumber
        // toggle isSecondOperand to true
        if (operatorValue && firstNumber === 0) {
            firstNumber = parseInt(displayValue.innerText);
            isSecondOperand = true;
            // if clicked sign and firstNumber has some number and secondNumber is 0, store secondNumber
        }
        // else if (operatorValue && firstNumber && secondNumber === 0) {
        //     secondNumber = parseInt(displayValue.innerText);
        // }

    })
}

//
//? equal sign
//  call function operate on stored first values and second values with the stored operator value
const equalsBtn = document.querySelector('#equalBtn');
equalsBtn.addEventListener('click', (e) => {
    if (firstNumber && operatorValue) {
        secondNumber = displayValue.innerText;
    }
    displayValue.innerText = operate(parseInt(firstNumber), parseInt(secondNumber), operatorValue);
    // console.log(e);
    console.log(`firstNumber is ${firstNumber}`)
    console.log(`secondNumber is ${secondNumber}`)
    console.log(`operatorValue is ${operatorValue}`)
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