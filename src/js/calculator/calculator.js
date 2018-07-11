'use strict';

import ChangeTheme from './theming/themeColor';
import ChangeThemeType from './theming/themeType';
import operations from './helpers/operation'; 


function Calc(id) {

    var doc = document,
        elem = doc.querySelector(id),
        display = elem.querySelector('.display'),
        memoryCurrentNumber = 0,
        memoryOperation = '',
        entryNewNumber = false;

    var changeTheme = new ChangeTheme(id);
    changeTheme.init();

    var changeThemeType = new ChangeThemeType(id);
    changeThemeType.init();
    
    this.init = function(){
       
        // События на клик, ввод цифр 
        let keyNumbers = elem.querySelectorAll('.keynumber');
        for (let i = 0; i < keyNumbers.length; i++){
            let keyNumber = keyNumbers[i];
            keyNumber.addEventListener('click', function(e){
                pressKeyNumber(e.target.textContent);
            });
        }
    
    
        // События на клик по операциям 
        let keyOperations = elem.querySelectorAll('.keyoperations');
        for (let i = 0; i<keyOperations.length; i++){
            let keyOperation = keyOperations[i];
            keyOperation.addEventListener('click', operationAction);
        }
    
    
        // События на клик, очистка калькулятора 
        let keyAc = elem.querySelector('.keyac');
        keyAc.addEventListener('click', pressKeyClear);
    
    
        // События на клик, добавление точки 
        let keyDot = elem.querySelector('.keydot');
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
        

    // Функция точки, 

    var pressKeyDot = function pressKeyDot(){

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


    // Функция отвечающия за операции
       
    var operationAction = function (clickEvent){
               
         
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

    // Функция полной очистки значений калькулятора

    var pressKeyClear = function (){
        display.value = 0;
        memoryCurrentNumber = 0;
        memoryOperation = '';
        entryNewNumber = true;
        
    };
}

export default Calc;
