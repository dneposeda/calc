'use strict';

import 'normalize.css';
import '../css/style.css';
import changeTheme from './themeColor';
import changeThemeType from './themeType';
import {pressKeyNumber, pressKeyOperation, pressKeyDot, pressKeyClear} from './calculator';


var doc = document;


/* События на клик, смены цветовой темы */
var btnChangeTheme = doc.getElementById('btnChangeTheme');
btnChangeTheme.addEventListener('click', changeTheme);


/* События на клик, смены типа калькулятора */
var btnChangeThemeType = doc.getElementById('btnChangeThemeEngineering');
btnChangeThemeType.addEventListener('click', changeThemeType);


/* События на клик, ввод цифр */
var keyNumbers = doc.querySelectorAll('.keynumber');

for (let i = 0; i < keyNumbers.length; i++){
    let keyNumber = keyNumbers[i];
    keyNumber.addEventListener('click', function(e){
        pressKeyNumber(e.target.textContent);
    });
}


/* События на клик по операциям */
var keyOperations = doc.querySelectorAll('.keyoperations');

for (let i = 0; i<keyOperations.length; i++){
    let keyOperation = keyOperations[i];
    keyOperation.addEventListener('click', function(e){
        pressKeyOperation(e.target.textContent);
    });
}


/* События на клик, очистка калькулятора */
var keyAc = doc.getElementById('keyac');
keyAc.addEventListener('click', pressKeyClear);


/* События на клик, добавление точки */
var keyDot = doc.getElementById('keydot');
keyDot.addEventListener('click', pressKeyDot);
