'use strict';

import * as operation from './helper/operation'; 

var doc = document,
    display = doc.getElementById('display'),
    memoryCurrentNumber = 0,
    memoryOperation = '',
    entryNewNumber = false;



var init = function(){
        
    /* События на клик, ввод цифр */
    let keyNumbers = doc.querySelectorAll('.keynumber');

    for (let i = 0; i < keyNumbers.length; i++){
        let keyNumber = keyNumbers[i];
        keyNumber.addEventListener('click', function(e){
            pressKeyNumber(e.target.textContent);
        });
    }


    /* События на клик по операциям */
    let keyOperations = doc.querySelectorAll('.keyoperations');
    for (let i = 0; i<keyOperations.length; i++){
        let keyOperation = keyOperations[i];
        keyOperation.addEventListener('click', function(e){
            pressKeyOperation(e.target.textContent, e.target.value);
        });
    }


    /* События на клик, очистка калькулятора */
    let keyAc = doc.getElementById('keyac');
    keyAc.addEventListener('click', pressKeyClear);


    /* События на клик, добавление точки */
    let keyDot = doc.getElementById('keydot');
    keyDot.addEventListener('click', pressKeyDot);
}


/**
 * Функция вывода цифр на экран
 */
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
    
    
/**
 *
 *  Функция отвечающия за операции
 */    
function pressKeyOperation(symbol, nameSymbol){
           
    let localMemoryNumber = display.value;

    if (entryNewNumber && memoryOperation !== '='){
        display.value = memoryCurrentNumber;
        memoryOperation = symbol;
    } else {
        if (nameSymbol !== ''){
            entryNewNumber = true;
            switch(nameSymbol){
                case 'log':
                    memoryCurrentNumber = Math.log10(localMemoryNumber);
                    break;
                case 'rootx':
                    memoryCurrentNumber = Math.sqrt(localMemoryNumber);
                    break;
                case 'n!':
                    memoryCurrentNumber = operation.factorial(localMemoryNumber);
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
                    memoryCurrentNumber = operation.addition(memoryCurrentNumber, localMemoryNumber);
                    break;
                case '-':
                    memoryCurrentNumber = operation.subtraction(memoryCurrentNumber, localMemoryNumber);
                    break;
                case '*':
                    memoryCurrentNumber = operation.multiplication(memoryCurrentNumber, localMemoryNumber);
                    break;
                case '/':
                    memoryCurrentNumber = operation.division(memoryCurrentNumber, localMemoryNumber);
                    break;
                case 'xn':
                    memoryCurrentNumber = operation.exponentiation(memoryCurrentNumber, localMemoryNumber);
                    break;
                case 'y√x':
                    memoryCurrentNumber = operation.mathroot(memoryCurrentNumber, localMemoryNumber);
                    break;
                default:
                    memoryCurrentNumber = parseFloat(localMemoryNumber);
            };
            
            display.value = +memoryCurrentNumber.toFixed(10);
            memoryOperation = symbol;
        };
        
    };

};


/**
 * Функция точки, 
 */
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


/**
 * Функция полной очистки значений калькулятора
 */
function pressKeyClear(){
    display.value = 0;
    memoryCurrentNumber = 0;
    memoryOperation = '';
    entryNewNumber = true;
    
};

export {init};


