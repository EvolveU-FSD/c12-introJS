console.log('calculator functions loaded')

var displayNumber = 0;
var storedNumber = 0;
var operation = '';

function addANumber(number){
    displayNumber = displayNumber * 10 + number;
    console.log('called addANumber, displayNumber is now:', displayNumber)
    showDisplay();
}

function showDisplay(){
    var displayArea = document.getElementById('displayValue');
    displayArea.innerHTML = displayNumber;
}

function add(){
    equal()
    operation = '+'
    storedNumber = displayNumber
    displayNumber = 0
}

function equal(){
    if (operation == '')
        showDisplay()
    if (operation == '+')
    {
        displayNumber = storedNumber + displayNumber
        showDisplay()
    }
}

function clear(){
    displayNumber = 0
    storedNumber = 0
    showDisplay()
}