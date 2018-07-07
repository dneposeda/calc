'use strict';

/**
 * Смена режима калькулятора между простым и инженерным.
 * Функция меняет ширину калькулятора добавляя класс-модификатор и
 * изменяет стили в CSS 
 */
    var changeThemeType = function(){

        let calc = document.getElementById('calculator'),
            keys = document.querySelectorAll('.key-engineering');

        calc.classList.toggle('calculator--width');

        for (var i = 0; i < keys.length; i++){
            keys[i].classList.toggle('key-engineering--none');
        }
        
        
        
   
    };

export default changeThemeType;