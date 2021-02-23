// TODO: number display in the beginning
// TODO: create variable to display numbers when pressed
// TODO: create variable to store numbers 
// TODO: operators won't be displayed, but need to action

const numbersBtns = document.querySelectorAll('.numberDigits');
const numbers = numbersBtns.value;
const operatorBtns = document.querySelectorAll('.btn-warning');
const equalBtns = document.querySelectorAll('.btn-success');

let calcDisplay = document.querySelector('#calcDisplay')
calcDisplay.innerHTML = 0;

let numberArray = []; //store clicked number --- use an array?
let initialNumber = 0;

for (let i = 0; i < numbersBtns.length; i++) {
    numbersBtns[i].addEventListener('click', (e) => {
        calcDisplay.innerHTML += e.target.innerHTML;
    })
}