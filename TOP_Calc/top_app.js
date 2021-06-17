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

//*pseudocode
//? First Number Display
//  Button Click on Number
//  Number appears in calculator display 

//? Operator click
// Store displayed value as first value
// operator button clicked should be stored as the operator value 
//  which will be used in operate function

//? 2nd number Display
//  Clear display value 
//  number(s) clicked should appear in calc display
//
//? equal sign
//  call function operate on stored first values and second values with the stored operator value
// 
// 