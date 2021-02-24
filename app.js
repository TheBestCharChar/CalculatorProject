const numbersBtns = document.querySelectorAll('.numberDigits');
const allButtons = document.querySelectorAll('.btn');

let calcDisplay = document.querySelector('#calcDisplay')
let calcDisplayValue = document.querySelector('#calcDisplay').value
// calcDisplay = 0;

let numberArray = []; //store clicked number --- use an array?
let initialNumber = 0;

for (let button of allButtons) { //clicking on number buttons results in adding to calcdisplay
    button.addEventListener('click', () => {
        // console.dir(btns);
        calcDisplayValue += button.innerHTML
        console.log(button.innerHTML)

    })
}

function calculate(event) {
    const clickedButtonValue = event.target.value;

    if (clickedButtonValue === '=') {
        if (calcDisplayValue !== '') {

        }
    }


}