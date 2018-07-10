'use strict';

/**
 * Смена темы, функция делает замену классов на элементе.
 * Функция находит элемен с ID calc и проверяет наличие классов dark и light,
 * если класс есть убирает его, если нет добавляет.
 * По умолчание один из классов должен быть на элементе.
 */
var doc = document;

var changeTheme = function(){

    let calc = doc.getElementById('calc');
    calc.classList.toggle('dark');
    calc.classList.toggle('light');

};

/* События на клик, смены цветовой темы */
var init = function() {
    let btnChangeTheme = doc.getElementById('btnChangeTheme');
    btnChangeTheme.addEventListener('click', changeTheme);
}


export {init};