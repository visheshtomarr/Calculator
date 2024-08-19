// Calculator functions

const display = document.querySelector('#display') ;

function appendToDisplay(inputForDisplay) {
    display.value += inputForDisplay ;
}

function clearCalculatorDisplay() {
    display.value = '' ;
}
