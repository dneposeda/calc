'use strict';

import {addition, subtraction, multiplication, division} from './helper/operation'; 

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
            pressKeyOperation(e.target.textContent);
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
function pressKeyOperation(symbol){
           
    let localMemoryNumber = display.value;

    if (entryNewNumber && memoryOperation !== '='){
        display.value = memoryCurrentNumber;
        memoryOperation = symbol;
    } else {
        entryNewNumber = true;
        switch(memoryOperation){
            case '+':
                memoryCurrentNumber = addition(memoryCurrentNumber, localMemoryNumber);
                break;
            case '-':
                memoryCurrentNumber = subtraction(memoryCurrentNumber, localMemoryNumber);
                break;
            case '*':
                memoryCurrentNumber = multiplication(memoryCurrentNumber, localMemoryNumber);
                break;
            case '/':
                memoryCurrentNumber = division(memoryCurrentNumber, localMemoryNumber);
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


