'use strict';

/**
 * Включает отображение журнала истории операций, функция делает замену классов на элементе.
 * Функция находит элемен с ID history и проверяет наличие класса calc__display-history--none,
 * если класс есть убирает его, если нет добавляет.
 * По умолчание класс calc__display-history--none должен быть на элементе.
 */

function historyDisplay(id){

    let doc = document,
        elem = doc.querySelector(id);

    let changeHistoryDisplay = () => {
    
        let history = elem.querySelector('#history');
        history.classList.toggle('calc__display-history--none');

    };
    
    /* События на клик, для вкл/откл истории операций */
    this.init = () => {
        let btnChangeHistory = elem.querySelector('.btnChangeHistory');
        btnChangeHistory.addEventListener('click', changeHistoryDisplay);
    };
}

export default historyDisplay;