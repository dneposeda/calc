'use strict';

/**
 * Смена режима калькулятора между простым и инженерным.
 * Функция меняет ширину калькулятора добавляя класс-модификатор и
 * изменяет стили в CSS 
 */
var doc = document;

var changeThemeType = function(){

    let calc = doc.getElementById('calculator'),
        keys = doc.querySelectorAll('.key-engineering');

    calc.classList.toggle('calculator--width');

    for (let i = 0; i < keys.length; i++){
        keys[i].classList.toggle('key-engineering--none');
    }

};

/* События на клик, смены типа калькулятора */
var init = function(){
    let btnChangeThemeType = doc.getElementById('btnChangeThemeEngineering');
    btnChangeThemeType.addEventListener('click', changeThemeType);
}


export {init};