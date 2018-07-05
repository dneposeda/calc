import 'normalize.css';
import '../css/style.css';
import chengeTheme from './theme';


var doc = document,
    btnChengeTheme = doc.getElementById('btnChengeTheme'),
    keyNumbers = doc.querySelectorAll('.keynumber'),
    keyOperations = doc.querySelectorAll('.keyoperations'),
    keyAc = doc.getElementById('keyac'),
    keyDot = doc.getElementById('keydot'),
    display = doc.getElementById('display'),
    memoryCurrentNumber = 0,
    memoryOperation = '',
    entryNewNumber = false;


function pressKeyNumber(numb){

    if (entryNewNumber){
        display.value = numb;
        entryNewNumber = false;
    } else {
        if (display.value === '0'){
            display.value = numb;
        } else {
            display.value += numb;
        };
    };
    
};



function pressKeyOperation(symbol){
    
    var localMemoryNumber = display.value;
    
    if (entryNewNumber && memoryOperation !== '='){
        display.value = memoryCurrentNumber;
        memoryOperation = symbol;
    } else {
        entryNewNumber = true;
        switch(memoryOperation){
            case '+':
                memoryCurrentNumber += parseFloat(localMemoryNumber);
                break;
            case '-':
                memoryCurrentNumber -= parseFloat(localMemoryNumber);
                break;
            case '*':
                memoryCurrentNumber *= parseFloat(localMemoryNumber);
                break;
            case '/':
                memoryCurrentNumber /= parseFloat(localMemoryNumber);
                break;
            default:
                memoryCurrentNumber = parseFloat(localMemoryNumber);
        };
        
        display.value = +memoryCurrentNumber.toFixed(10);
        memoryOperation = symbol;
    };

};


/**
 * Функция точки, 
 */
function pressKeyDot(dot){

    var localMemoryDot = display.value;

    if (entryNewNumber){
        localMemoryDot = '0.';
        entryNewNumber = false;
    } else {
        if (localMemoryDot.indexOf('.') === -1){
            localMemoryDot += '.';
        };
    };

    display.value = localMemoryDot;

};


/**
 * Функция полной очистки значений калькулятора
 */
function pressKeyClear(){
    display.value = 0;
    memoryCurrentNumber = 0;
    memoryOperation = '';
    entryNewNumber = true;
    
};



/* События на клик смены темы */
btnChengeTheme.addEventListener('click', chengeTheme);

/* События на клик по цифрам */
for (var i = 0; i<keyNumbers.length; i++){
    var keyNumber = keyNumbers[i];
    keyNumber.addEventListener('click', function(e){
        pressKeyNumber(e.target.textContent);
    });
}

/* События на клик по операциям */
for (var i = 0; i<keyOperations.length; i++){
    var keyOperation = keyOperations[i];
    keyOperation.addEventListener('click', function(e){
        pressKeyOperation(e.target.textContent);
    });
}

/* События на клик очистки */
keyAc.addEventListener('click', pressKeyClear);

/* События на клик точки */
keyDot.addEventListener('click', function(e){
    pressKeyDot(e.target.textContent);
});
