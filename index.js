// Calculator functions

const display = document.querySelector('#display') ;

// Function to display the input string.
function appendToDisplay(inputForDisplay) {
    display.value += inputForDisplay ;
}

// Function will clear the input string.
function clearCalculatorDisplay() {
    display.value = '' ;
}

// Function will return error if any wrong mathematical expression is given as input.
function calculate() {
    try {
        display.value = eval(display.value) ;
    }
    catch(error) {
        display.value = 'Error' ;
    }
}