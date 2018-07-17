/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/calculator/calculator.js":
/*!*****************************************!*\
  !*** ./src/js/calculator/calculator.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _themeColor = __webpack_require__(/*! ./theming/themeColor */ "./src/js/calculator/theming/themeColor.js");

var _themeColor2 = _interopRequireDefault(_themeColor);

var _themeType = __webpack_require__(/*! ./theming/themeType */ "./src/js/calculator/theming/themeType.js");

var _themeType2 = _interopRequireDefault(_themeType);

var _operation = __webpack_require__(/*! ./helpers/operation */ "./src/js/calculator/helpers/operation.js");

var _operation2 = _interopRequireDefault(_operation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calc = function Calc(id) {
    _classCallCheck(this, Calc);

    var doc = document,
        elem = doc.querySelector(id),
        display = elem.querySelector('.display'),
        historyDisplay = elem.querySelector('.displayHistory'),
        historyNumber = '',
        memoryCurrentNumber = 0,
        memoryOperation = '',
        entryNewNumber = false;

    var changeTheme = new _themeColor2.default(id);
    changeTheme.init();

    var changeThemeType = new _themeType2.default(id);
    changeThemeType.init();

    this.init = function () {

        // События на клик, ввод цифр 
        var keyNumbers = elem.querySelectorAll('.keynumber');
        for (var i = 0; i < keyNumbers.length; i++) {
            var keyNumber = keyNumbers[i];
            keyNumber.addEventListener('click', pressKeyNumber);
        }

        // События на клик по операциям 
        var keyOperations = elem.querySelectorAll('.keyoperations');
        for (var _i = 0; _i < keyOperations.length; _i++) {
            var keyOperation = keyOperations[_i];
            keyOperation.addEventListener('click', operationAction);
        }

        // События на клик, очистка калькулятора 
        var keyAc = elem.querySelector('.keyac');
        keyAc.addEventListener('click', operationClear);

        // События на клик, добавление точки 
        var keyDot = elem.querySelector('.keydot');
        keyDot.addEventListener('click', pressKeyDot);

        // События на клик, унарного минуса 
        var keyUniMin = elem.querySelector('.unomin');
        keyUniMin.addEventListener('click', pressKeyUnoMinus);
    };

    // Функция вывода цифр на экран

    var pressKeyNumber = function pressKeyNumber(clickEvent) {

        var numb = clickEvent.target.textContent;

        if (entryNewNumber) {
            display.value = numb;
            historyDisplay.value += display.value;
            entryNewNumber = false;
        } else {
            if (display.value === '0') {
                display.value = numb;
                historyDisplay.value = display.value;
            } else {
                display.value += numb;
                historyDisplay.value += numb;
            };
        };
    };

    // Функция точки, 

    var pressKeyDot = function pressKeyDot() {

        var localMemoryDot = display.value;

        if (entryNewNumber) {
            localMemoryDot = '0.';
            entryNewNumber = false;
        } else {
            if (localMemoryDot.indexOf('.') === -1) {
                localMemoryDot += '.';
            };
        };

        display.value = localMemoryDot;
        historyNumber = display.value;
        historyDisplay.value = historyNumber;
    };

    // Функция унврный минус 

    var pressKeyUnoMinus = function pressKeyUnoMinus() {

        var localMemoryNumber = display.value;

        if (localMemoryNumber.indexOf('-') === -1) {
            localMemoryNumber = '-' + localMemoryNumber;
        } else {
            localMemoryNumber = localMemoryNumber;
        };

        display.value = localMemoryNumber;
        historyNumber = display.value;
        historyDisplay.value = historyNumber;
    };

    // Функция отвечающия за операции

    var operationAction = function operationAction(clickEvent) {

        var localMemoryNumber = display.value,
            symbol = clickEvent.target.textContent,
            nameSymbol = clickEvent.target.value;

        if (entryNewNumber && memoryOperation !== '=') {
            display.value = memoryCurrentNumber;
            memoryOperation = symbol;
            historyDisplay.value = display.value + memoryOperation;
        } else {
            if (nameSymbol !== '') {
                entryNewNumber = true;
                switch (nameSymbol) {
                    case '%':
                        historyDisplay.value += nameSymbol;
                        switch (memoryOperation) {
                            case '-':
                                memoryCurrentNumber = memoryCurrentNumber - _operation2.default.percentage(memoryCurrentNumber, localMemoryNumber);
                                break;
                            case '+':
                                memoryCurrentNumber = memoryCurrentNumber + _operation2.default.percentage(memoryCurrentNumber, localMemoryNumber);
                                break;
                            case '*':
                                memoryCurrentNumber = _operation2.default.percentage(memoryCurrentNumber, localMemoryNumber);
                                break;
                            case '/':
                                memoryCurrentNumber = _operation2.default.percentage(memoryCurrentNumber, localMemoryNumber);
                                break;
                        }

                        break;
                    case 'log':
                        memoryCurrentNumber = _operation2.default.log(localMemoryNumber);
                        break;
                    case 'rootx':
                        memoryCurrentNumber = _operation2.default.sqrt(localMemoryNumber);
                        break;
                    case 'n!':
                        memoryCurrentNumber = _operation2.default.factorial(localMemoryNumber);
                        break;
                    default:
                        memoryCurrentNumber = parseFloat(localMemoryNumber);
                };

                display.value = +memoryCurrentNumber.toFixed(10);
                memoryOperation = nameSymbol;
            } else {
                entryNewNumber = true;
                switch (memoryOperation) {
                    case '+':
                        memoryCurrentNumber = _operation2.default.addition(memoryCurrentNumber, localMemoryNumber);
                        break;
                    case '-':
                        memoryCurrentNumber = _operation2.default.subtraction(memoryCurrentNumber, localMemoryNumber);
                        break;
                    case '*':
                        memoryCurrentNumber = _operation2.default.multiplication(memoryCurrentNumber, localMemoryNumber);
                        break;
                    case '/':
                        memoryCurrentNumber = _operation2.default.division(memoryCurrentNumber, localMemoryNumber);
                        break;
                    case 'xn':
                        memoryCurrentNumber = _operation2.default.exponentiation(memoryCurrentNumber, localMemoryNumber);
                        break;
                    case 'y√x':
                        memoryCurrentNumber = _operation2.default.mathroot(memoryCurrentNumber, localMemoryNumber);
                        break;
                    default:
                        memoryCurrentNumber = parseFloat(localMemoryNumber);
                };

                display.value = +memoryCurrentNumber.toFixed(10);
                memoryOperation = symbol;

                if (memoryOperation !== '=') {
                    historyDisplay.value += memoryOperation;
                }
            };
        };
    };

    // Функция полной очистки значений калькулятора

    var operationClear = function operationClear() {
        display.value = 0;
        historyDisplay.value = '';
        historyNumber = '';
        memoryCurrentNumber = 0;
        memoryOperation = '';
        entryNewNumber = true;
    };
};

;

exports.default = Calc;

/***/ }),

/***/ "./src/js/calculator/helpers/operation.js":
/*!************************************************!*\
  !*** ./src/js/calculator/helpers/operation.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var operations = {
    /**
     *  (1+2)
     * Функция сложения двух чисел.
     * В функцию передается два числа, порядок не имеет значения.     * 
     * Возращает результат от операции.
     */
    addition: function addition(numberOne, numberTwo) {
        var add = parseFloat(numberOne) + parseFloat(numberTwo);
        return add;
    },

    /**
     *  (1-2)
     * Функция вычитания двух чисел.
     * Из первого переданного числа вычитается второе переданное.
     * Возращает результат от операции.
     */
    subtraction: function subtraction(numberOne, numberTwo) {
        var sub = parseFloat(numberOne) - parseFloat(numberTwo);
        return sub;
    },

    /**
     *  (1*2)
     * Функция умножения, возращает произведение двух чисел.
     */
    multiplication: function multiplication(numberOne, numberTwo) {
        var mlp = parseFloat(numberOne) * parseFloat(numberTwo);
        return mlp;
    },

    /**
     *  (1/2)
     * Функция деления, первое число делит на второе.
     * Возращает результат от операции.
     */
    division: function division(numberOne, numberTwo) {
        var dvsn = parseFloat(numberOne) / parseFloat(numberTwo);
        return dvsn;
    },

    /**
     *  (3!)
     * Функция вычесления факториала.
     * Возращает результат от операции.
     */
    factorial: function factorial(numberOne) {
        var iteration = function iteration(counter, accum) {
            if (counter === 1 || counter === 0) {
                return accum;
            } else {
                return iteration(counter - 1, counter * accum);
            }
        };

        return iteration(+numberOne, 1);
    },

    /**
     *  (X в степени n)
     * Функция возведения в степень. Используется стандартный функционал Math
     * Возращает результат от операции.
     */
    exponentiation: function exponentiation(numberOne, numberTwo) {
        var pow = Math.pow(numberOne, numberTwo);
        return pow;
    },

    /**
     *  (корень в степени n из X)
     * Функция вычисления корня в n степени из x. Используется стандартный функционал Math
     * Возращает результат от операции.
     */
    mathroot: function mathroot(numberOne, numberTwo) {
        var mrt = Math.pow(numberOne, 1 / numberTwo);
        return mrt;
    },

    /**
     *  (логорифм из X)
     * Функция вычисления логорифм из числа x. Используется стандартный функционал Math
     * Возращает результат от операции.
     */
    log: function log(numberOne) {
        var log = Math.log10(numberOne);
        return log;
    },

    /**
     *  (логорифм из X)
     * Функция вычисления логорифм из числа x. Используется стандартный функционал Math
     * Возращает результат от операции.
     */
    sqrt: function sqrt(numberOne) {
        var sqrt = Math.sqrt(numberOne);
        return sqrt;
    },

    /**
     * Функция проценты
     */
    percentage: function percentage(numberOne, numberTwo) {
        var percentage = numberOne / 100 * parseFloat(numberTwo);
        return percentage;
    }
};

exports.default = operations;

/***/ }),

/***/ "./src/js/calculator/theming/themeColor.js":
/*!*************************************************!*\
  !*** ./src/js/calculator/theming/themeColor.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Смена темы, функция делает замену классов на элементе.
 * Функция находит элемен с ID calc и проверяет наличие классов dark и light,
 * если класс есть убирает его, если нет добавляет.
 * По умолчание один из классов должен быть на элементе.
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
function ChangeTheme(id) {

    var doc = document,
        elem = doc.querySelector(id);

    var changeTheme = function changeTheme() {

        var calc = elem.querySelector('.calc');
        calc.classList.toggle('dark');
        calc.classList.toggle('light');
    };

    /* События на клик, смены цветовой темы */
    this.init = function () {
        var btnChangeTheme = elem.querySelector('.btnChangeTheme');
        btnChangeTheme.addEventListener('click', changeTheme);
    };
}

exports.default = ChangeTheme;

/***/ }),

/***/ "./src/js/calculator/theming/themeType.js":
/*!************************************************!*\
  !*** ./src/js/calculator/theming/themeType.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Смена режима калькулятора между простым и инженерным.
 * Функция меняет ширину калькулятора добавляя класс-модификатор и
 * изменяет стили в CSS 
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
function ChangeThemeType(id) {

    var doc = document,
        elem = doc.querySelector(id);

    var changeThemeType = function changeThemeType() {

        elem.classList.toggle('calculator--width');

        var keys = elem.querySelectorAll('.key-engineering');
        for (var i = 0; i < keys.length; i++) {
            keys[i].classList.toggle('key-engineering--none');
        }
    };

    /* События на клик, смены типа калькулятора */
    this.init = function () {
        var btnChangeThemeType = elem.querySelector('.btnChangeThemeEngineering');
        btnChangeThemeType.addEventListener('click', changeThemeType);
    };
};

exports.default = ChangeThemeType;

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");

__webpack_require__(/*! ../css/style.css */ "./src/css/style.css");

var _calculator = __webpack_require__(/*! ./calculator/calculator */ "./src/js/calculator/calculator.js");

var _calculator2 = _interopRequireDefault(_calculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var calc = new _calculator2.default('#calculator');
calc.init();

var calc2 = new _calculator2.default('#calculator2');
calc2.init();

/***/ })

/******/ });
//# sourceMappingURL=script.js.map