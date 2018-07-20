'use strict';

/**
 * Смена режима калькулятора между простым и инженерным.
 * Класс меняет ширину калькулятора добавляя класс-модификатор CSS.
 * Классу необходимо передать ID элемента.
 */

export default class ChangeThemeType{

    constructor(id){
        this.elem = document.querySelector(id);
    }

    init(){

        // Иницилизация события на клик, смена инженерного типа
        let btnChangeThemeType = this.elem.querySelector('.btnChangeThemeEngineering');
        btnChangeThemeType.addEventListener('click', this.changeType.bind(this));
    }

    changeType(){

        // Меняем ширину калькулятора с помощью сменой css класса
        this.elem.classList.toggle('calculator--width');

        // Отборажаем инженерные кнопки операций с помощью сменой css класса
        let keys = this.elem.querySelectorAll('.key-engineering');
        for (let i = 0; i < keys.length; i++){
            keys[i].classList.toggle('key-engineering--none');
        }
    }
}



