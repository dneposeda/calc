'use strict';
  

/**
 *  (1+2)
 * Функция сложения двух чисел.
 * В функцию передается два числа, порядок не имеет значения.     * 
 * Возращает результат от операции.
 */
var addition = function(numberOne, numberTwo){
    let add = parseFloat(numberOne) + parseFloat(numberTwo);
    return add;
};

/**
 *  (1-2)
 * Функция вычитания двух чисел.
 * Из первого переданного числа вычитается второе переданное.
 * Возращает результат от операции.
 */
var subtraction = function(numberOne, numberTwo){
    let sub = parseFloat(numberOne) - parseFloat(numberTwo);
    return sub;
};

/**
 *  (1*2)
 * Функция умножения, возращает произведение двух чисел.
 */
var multiplication = function(numberOne, numberTwo){
    let mlp = parseFloat(numberOne) * parseFloat(numberTwo);
    return mlp;
};

/**
 *  (1/2)
 * Функция деления, первое число делит на второе.
 * Возращает результат от операции.
 */
var division = function(numberOne, numberTwo){
    let dvsn = parseFloat(numberOne) / parseFloat(numberTwo);
    return dvsn;
};

export {addition, subtraction, multiplication, division};