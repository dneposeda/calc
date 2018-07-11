'use strict';

/**
 * Смена режима калькулятора между простым и инженерным.
 * Функция меняет ширину калькулятора добавляя класс-модификатор и
 * изменяет стили в CSS 
 */

function ChangeThemeType(id){

    let doc = document,
        elem = doc.querySelector(id);

    let changeThemeType = function(){

        elem.classList.toggle('calculator--width');

        let keys = elem.querySelectorAll('.key-engineering');
        for (let i = 0; i < keys.length; i++){
            keys[i].classList.toggle('key-engineering--none');
        }

    };

    /* События на клик, смены типа калькулятора */
    this.init = function(){
        let btnChangeThemeType = elem.querySelector('.btnChangeThemeEngineering');
        btnChangeThemeType.addEventListener('click', changeThemeType);
    };

};

export default ChangeThemeType;