'use strict';

import ChangeTheme from './theming/themeColor';
import ChangeThemeType from './core/themeType';
import HistoryDisplay from './core/historyDisplay';
import operations from './helpers/operation'; 
import MenuCalc from './helpers/menu'; 

export default class Calc {
    constructor(id){

        this.id = id;
        this.elem = document.querySelector(this.id),
        this.display = this.elem.querySelector('.display'),
        this.historyDisplay = this.elem.querySelector('.displayHistory'),
        this.historyNumber = '',
        this.memoryCurrentNumber = 0,
        this.memoryOperation = '',
        this.historyArray = [],
        this.entryNewNumber = false;

        // смена цветовой темы    
        let changeTheme = new ChangeTheme(id);
        changeTheme.init();

        // смена типа калькулятора
        let calcType = new ChangeThemeType(id);
        calcType.init();

        //вкл/откл истории операций
        let changeHistoryDisplay = new HistoryDisplay(id);
        changeHistoryDisplay.init();

        //вкл/откл меню настроек
        let MenuCalcBtn = new MenuCalc(id);
        MenuCalcBtn.init();
    }

    // Иницилизация событий
    init(){

        // События на клик, ввод цифр 
        let keyNumbers = this.elem.querySelectorAll('.keynumber');
        for (let i = 0; i < keyNumbers.length; i++){
            let keyNumber = keyNumbers[i];
            keyNumber.addEventListener('click', this.pressKeyNumber.bind(this));
        }


        // События на клик по операциям 
        let keyOperations = this.elem.querySelectorAll('.keyoperations');
        for (let i = 0; i<keyOperations.length; i++){
            let keyOperation = keyOperations[i];
            keyOperation.addEventListener('click', this.operationAction.bind(this));
        }

        // События на клик, очистка калькулятора 
        let keyAc = this.elem.querySelector('.keyac');
        keyAc.addEventListener('click', this.operationClear.bind(this));

        // События на клик, добавление точки 
        let keyDot = this.elem.querySelector('.keydot');
        keyDot.addEventListener('click', this.pressKeyDot.bind(this));

        // События на клик, унарного минуса 
        let keyUniMin = this.elem.querySelector('.unomin');
        keyUniMin.addEventListener('click', this.operationUnoMinus.bind(this));
    }

    // Функция вывода цифр на экран
    pressKeyNumber(clickEvent){

        let numb = clickEvent.target.textContent;

        if (this.entryNewNumber){
            this.display.value = numb;
            this.historyDisplay.value += this.display.value;
            this.entryNewNumber = false;
        } else {
            if (this.display.value === '0'){
                this.display.value = numb;
                this.historyDisplay.value = this.display.value;
            } else {
                this.display.value += numb;
                this.historyDisplay.value += numb;
            }
        }
    }

    // Функция точки
    pressKeyDot(){
        let localMemoryDot = this.display.value;

        if (this.entryNewNumber){
            localMemoryDot = '0.';
            this.entryNewNumber = false;
        } else {
            if (localMemoryDot.indexOf('.') === -1){
                localMemoryDot += '.';
            };
        };

        this.display.value = localMemoryDot;
        this.historyNumber = this.display.value;
        this.historyDisplay.value = this.historyNumber;
    }

    // Функция унарный минус    
    operationUnoMinus(){
       
        let localMemoryNumber = this.display.value;

        if (localMemoryNumber != '0'){
            if (localMemoryNumber.indexOf('-') === -1){
                localMemoryNumber = '-' + localMemoryNumber;
            } else {
                localMemoryNumber = localMemoryNumber.substr(1);
            };

            this.display.value = localMemoryNumber;
            this.historyNumber = this.display.value;
            this.historyDisplay.value = this.historyNumber;
        }
    }

    // Функция отвечающия за операции
    operationAction(clickEvent){
                  
        let localMemoryNumber = this.display.value,
            symbol = clickEvent.target.textContent,
            nameSymbol = clickEvent.target.value;
        
        if (this.entryNewNumber && this.memoryOperation !== '='){
            this.display.value = this.memoryCurrentNumber;
            this.memoryOperation = symbol;
            this.historyDisplay.value = this.display.value + this.memoryOperation;
        } else {
            if (nameSymbol !== ''){
                this.entryNewNumber = true;
                switch(nameSymbol){
                    case '%':
                    this.historyDisplay.value += nameSymbol;
                        switch(this.memoryOperation){
                            case '-':
                                this.memoryCurrentNumber = this.memoryCurrentNumber - operations.percentage(this.memoryCurrentNumber, localMemoryNumber);
                            break;
                            case '+':
                                this.memoryCurrentNumber = this.memoryCurrentNumber + operations.percentage(this.memoryCurrentNumber, localMemoryNumber);
                            break;
                            case '*':
                                this.memoryCurrentNumber = operations.percentage(this.memoryCurrentNumber, localMemoryNumber);
                            break;
                            case '/':
                                this.memoryCurrentNumber = operations.percentage(this.memoryCurrentNumber, localMemoryNumber);
                            break;
                        }
                        break;
                    case 'log':
                        this.memoryCurrentNumber = operations.log(localMemoryNumber);
                        break;
                    case 'rootx':
                        this.memoryCurrentNumber = operations.sqrt(localMemoryNumber);
                        break;
                    case 'n!':
                        this.memoryCurrentNumber = operations.factorial(localMemoryNumber);
                        break;
                    default:
                        this.memoryCurrentNumber = parseFloat(localMemoryNumber);
                };
    
                this.display.value = +this.memoryCurrentNumber.toFixed(10);
                this.memoryOperation = nameSymbol;
                
    
            } else{
                this.entryNewNumber = true;
                switch(this.memoryOperation){
                    case '+':
                        this.memoryCurrentNumber = operations.addition(this.memoryCurrentNumber, localMemoryNumber);
                        break;
                    case '-':
                        this.memoryCurrentNumber = operations.subtraction(this.memoryCurrentNumber, localMemoryNumber);
                        break;
                    case '*':
                        this.memoryCurrentNumber = operations.multiplication(this.memoryCurrentNumber, localMemoryNumber);
                        break;
                    case '/':
                        this.memoryCurrentNumber = operations.division(this.memoryCurrentNumber, localMemoryNumber);
                        break;
                    case 'xn':
                        this.memoryCurrentNumber = operations.exponentiation(this.memoryCurrentNumber, localMemoryNumber);
                        break;
                    case 'y√x':
                        this.memoryCurrentNumber = operations.mathroot(this.memoryCurrentNumber, localMemoryNumber);
                        break;
                    default:
                    this.memoryCurrentNumber = parseFloat(localMemoryNumber);
                };
                
                this.display.value = +this.memoryCurrentNumber.toFixed(10);
                this.memoryOperation = symbol;

                if (this.memoryOperation !== '=') {
                    this.historyDisplay.value += this.memoryOperation;
                }
                

            };
            
        }
    }

    // Функция полной очистки значений калькулятора
    operationClear(){
        this.display.value = 0;
        this.historyDisplay.value = '';
        this.historyNumber = '';
        this.historyArray = [];
        this.memoryCurrentNumber = 0;
        this.memoryOperation = '';
        this.entryNewNumber = true;
    }

}