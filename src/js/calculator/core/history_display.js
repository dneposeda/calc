'use strict';

/**
 * Класс скрывает или показывает журнал истории операции.
 * Меняя класс-модификатор CSS.
 * Классу необходимо передать ID элемента.
 */
export default class HistoryDisplay{
    
    constructor(id){
        this.elem = document.querySelector(id);
    }

    init(){

        // Иницилизация события на клик, отображение журнала истории операций
        let btnChangeHistory = this.elem.querySelector('.btnChangeHistory');
        btnChangeHistory.addEventListener('click', this.changeHistoryDisplay.bind(this));
    }

    changeHistoryDisplay(){

        // Скрывает/показывает историю операций с помощью смены css класса
        let history = this.elem.querySelector('#history');
        history.classList.toggle('calc__display-history--none');
     }
}