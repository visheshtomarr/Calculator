// Calculator functions

const display = document.querySelector('#display') ;

function appendToDisplay(inputForDisplay) {
    display.value += inputForDisplay ;
}

function clearCalculatorDisplay() {
    display.value = '' ;
}

function calculate() {
    try {
        display.value = eval(display.value) ;
    }
    catch(error) {
        display.value = 'Error' ;
    }
}