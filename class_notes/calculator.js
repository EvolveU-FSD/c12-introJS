var displayNumber = 0;
var rememberedNumber = 0;
var currentFunction = '';

function pressButton(number){
    displayNumber =  
        displayNumber * 10 + number
    showDisplayNumber()
}

function showDisplayNumber(){
    var display = document.
        getElementById('displayNumberBox')
    display.innerHTML = displayNumber
}

function clearDisplay(){
    displayNumber = 0
    rememberedNumber = 0
    currentFunction = ''
    showDisplayNumber()
}

function addPressed(){
    rememberedNumber = displayNumber
    displayNumber = 0
    currentFunction = '+'
    showDisplayNumber()
}

function equalPressed(){
    console.log('equal', currentFunction, rememberedNumber, displayNumber)
    if (currentFunction == '')
        {}
    if (currentFunction == '+'){
        displayNumber = rememberedNumber + displayNumber
    }

    showDisplayNumber()
}

