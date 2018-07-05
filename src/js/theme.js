

/**
 * Смена темы, функция делает замену классов на элементе.
 * Функция находит элемен с ID calc и проверяет наличие классов dark и light,
 * если класс есть убирает его, если нет добавляет.
 * По умолчание один из классов должен быть на элементе.
 */
    var chengeTheme = function(){

        var calc = doc.getElementById('calc');
        calc.classList.toggle('dark');
        calc.classList.toggle('light');
   
    };

export var chengeTheme;