'use strict';
  
let operations = {
    /**
     *  (1+2)
     * Функция сложения двух чисел.
     * В функцию передается два числа, порядок не имеет значения.     * 
     * Возращает результат от операции.
     */
    addition: function(numberOne, numberTwo){
        let add = parseFloat(numberOne) + parseFloat(numberTwo);
        return add;
    },

    /**
     *  (1-2)
     * Функция вычитания двух чисел.
     * Из первого переданного числа вычитается второе переданное.
     * Возращает результат от операции.
     */
    subtraction: function(numberOne, numberTwo){
        let sub = parseFloat(numberOne) - parseFloat(numberTwo);
        return sub;
    },

    /**
     *  (1*2)
     * Функция умножения, возращает произведение двух чисел.
     */
    multiplication: function(numberOne, numberTwo){
        let mlp = parseFloat(numberOne) * parseFloat(numberTwo);
        return mlp;
    },

    /**
     *  (1/2)
     * Функция деления, первое число делит на второе.
     * Возращает результат от операции.
     */
    division: function(numberOne, numberTwo){
        let dvsn = parseFloat(numberOne) / parseFloat(numberTwo);
        return dvsn;
    },



    /**
     *  (3!)
     * Функция вычесления факториала.
     * Возращает результат от операции.
     */
    factorial: function(numberOne){
        let iteration = function(counter, accum){
            if (counter === 1 || counter === 0) {
                return accum;
            } else {
                return iteration(counter-1, counter * accum);
            }   
        }

        return iteration(+numberOne, 1);
    },


    /**
     *  (X в степени n)
     * Функция возведения в степень. Используется стандартный функционал Math
     * Возращает результат от операции.
     */
    exponentiation: function(numberOne, numberTwo){
        let pow = Math.pow(numberOne, numberTwo);
        return pow;
    },

    /**
     *  (корень в степени n из X)
     * Функция вычисления корня в n степени из x. Используется стандартный функционал Math
     * Возращает результат от операции.
     */
    mathroot: function(numberOne, numberTwo){
        let mrt = Math.pow(numberOne, 1/numberTwo);
        return mrt;
    },

    /**
     *  (логорифм из X)
     * Функция вычисления логорифм из числа x. Используется стандартный функционал Math
     * Возращает результат от операции.
     */
    log: function(numberOne){
        let log = Math.log10(numberOne);
        return log;
    },

    /**
     *  (логорифм из X)
     * Функция вычисления логорифм из числа x. Используется стандартный функционал Math
     * Возращает результат от операции.
     */
    sqrt: function(numberOne){
        let sqrt = Math.sqrt(numberOne);
        return sqrt;
    },


    /**
     * Функция проценты
     */
    percentage: function(numberOne, numberTwo){
        let percentage = (numberOne / 100) * parseFloat(numberTwo);
        return percentage;
    },
}






export default operations;