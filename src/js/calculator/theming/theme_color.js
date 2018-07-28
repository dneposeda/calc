'use strict';

/**
 * Смена темы, функция делает замену класса CSS на элементе.
 * Класс находит элемен с ID и проверяет наличие классов dark и light,
 * если класс есть убирает его, если нет добавляет.
 * По умолчание один из классов должен быть на элементе.
 * Классу необходимо передать ID элемента.
 */
export default class ChangeTheme{
    
    constructor(id){
        this.elem = document.querySelector(id);
    }

    init(){

        // События на клик, смены цветовой темы 
        let btnChangeTheme = this.elem.querySelector('.btnChangeTheme');
        btnChangeTheme.addEventListener('click', this.changeTheme.bind(this));
    }

    changeTheme(){

        // меняет цветовую схему с помощью смены css класса
        let calc = this.elem.querySelector('.calc');
        calc.classList.toggle('dark');
        calc.classList.toggle('light');
    }
}