'use strict';

/**
 * Смена темы, функция делает замену классов на элементе.
 * Функция находит элемен с ID calc и проверяет наличие классов dark и light,
 * если класс есть убирает его, если нет добавляет.
 * По умолчание один из классов должен быть на элементе.
 */

function ChangeTheme(id){

    let doc = document,
        elem = doc.querySelector(id);

    let changeTheme = () => {
    
        let calc = elem.querySelector('.calc');
        calc.classList.toggle('dark');
        calc.classList.toggle('light');
    
    };
    
    /* События на клик, смены цветовой темы */
    this.init = () => {
        let btnChangeTheme = elem.querySelector('.btnChangeTheme');
        btnChangeTheme.addEventListener('click', changeTheme);
    };
}

export default ChangeTheme;