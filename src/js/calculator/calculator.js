'use strict';

import operations from './helpers/operation'; 

var doc = document,
    display = doc.getElementById('display'),
    memoryCurrentNumber = 0,
    memoryOperation = '',
    entryNewNumber = false;



var init = function(){
        
    // События на клик, ввод цифр 
    let keyNumbers = doc.querySelectorAll('.keynumber');

    for (let i = 0; i < keyNumbers.length; i++){
        let keyNumber = keyNumbers[i];
        keyNumber.addEventListener('click', function(e){
            pressKeyNumber(e.target.textContent);
        });
    }


    // События на клик по операциям 
    let keyOperations = doc.querySelectorAll('.keyoperations');
    for (let i = 0; i<keyOperations.length; i++){
        let keyOperation = keyOperations[i];
        keyOperation.addEventListener('click', operationAction);
    }


    // События на клик, очистка калькулятора 
    let keyAc = doc.getElementById('keyac');
    keyAc.addEventListener('click', pressKeyClear);


    // События на клик, добавление точки 
    let keyDot = doc.getElementById('keydot');
    keyDot.addEventListener('click', pressKeyDot);
}



// Функция вывода цифр на экран

var pressKeyNumber = function(numb){

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
    
    
// Функция отвечающия за операции
   
function operationAction(clickEvent){
           
     
    let localMemoryNumber = display.value,
        symbol = clickEvent.target.textContent,
        nameSymbol = clickEvent.target.value;

    if (entryNewNumber && memoryOperation !== '='){
        display.value = memoryCurrentNumber;
        memoryOperation = symbol;
    } else {
        if (nameSymbol !== ''){
            entryNewNumber = true;
            switch(nameSymbol){
                case 'log':
                    memoryCurrentNumber = operations.log(localMemoryNumber);
                    break;
                case 'rootx':
                    memoryCurrentNumber = operations.sqrt(localMemoryNumber);
                    break;
                case 'n!':
                    memoryCurrentNumber = operations.factorial(localMemoryNumber);
                    break;
                default:
                    memoryCurrentNumber = parseFloat(localMemoryNumber);
            };

            display.value = +memoryCurrentNumber.toFixed(10);
            memoryOperation = nameSymbol;

        } else{
            entryNewNumber = true;
            switch(memoryOperation){
                case '+':
                    memoryCurrentNumber = operations.addition(memoryCurrentNumber, localMemoryNumber);
                    break;
                case '-':
                    memoryCurrentNumber = operations.subtraction(memoryCurrentNumber, localMemoryNumber);
                    break;
                case '*':
                    memoryCurrentNumber = operations.multiplication(memoryCurrentNumber, localMemoryNumber);
                    break;
                case '/':
                    memoryCurrentNumber = operations.division(memoryCurrentNumber, localMemoryNumber);
                    break;
                case 'xn':
                    memoryCurrentNumber = operations.exponentiation(memoryCurrentNumber, localMemoryNumber);
                    break;
                case 'y√x':
                    memoryCurrentNumber = operations.mathroot(memoryCurrentNumber, localMemoryNumber);
                    break;
                default:
                    memoryCurrentNumber = parseFloat(localMemoryNumber);
            };
            
            display.value = +memoryCurrentNumber.toFixed(10);
            memoryOperation = symbol;
        };
        
    };

};



// Функция точки, 

function pressKeyDot(){

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



// Функция полной очистки значений калькулятора

function pressKeyClear(){
    display.value = 0;
    memoryCurrentNumber = 0;
    memoryOperation = '';
    entryNewNumber = true;
    
};

export {init};


