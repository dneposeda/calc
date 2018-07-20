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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _themeColor = __webpack_require__(/*! ./theming/themeColor */ "./src/js/calculator/theming/themeColor.js");

var _themeColor2 = _interopRequireDefault(_themeColor);

var _themeType = __webpack_require__(/*! ./core/themeType */ "./src/js/calculator/core/themeType.js");

var _themeType2 = _interopRequireDefault(_themeType);

var _historyDisplay = __webpack_require__(/*! ./core/historyDisplay */ "./src/js/calculator/core/historyDisplay.js");

var _historyDisplay2 = _interopRequireDefault(_historyDisplay);

var _operation = __webpack_require__(/*! ./helpers/operation */ "./src/js/calculator/helpers/operation.js");

var _operation2 = _interopRequireDefault(_operation);

var _menu = __webpack_require__(/*! ./helpers/menu */ "./src/js/calculator/helpers/menu.js");

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calc = function () {
    function Calc(id) {
        _classCallCheck(this, Calc);

        this.id = id;
        this.elem = document.querySelector(this.id), this.display = this.elem.querySelector('.display'), this.historyDisplay = this.elem.querySelector('.displayHistory'), this.historyNumber = '', this.memoryCurrentNumber = 0, this.memoryOperation = '', this.historyArray = [], this.entryNewNumber = false;

        // смена цветовой темы    
        var changeTheme = new _themeColor2.default(id);
        changeTheme.init();

        // смена типа калькулятора
        var calcType = new _themeType2.default(id);
        calcType.init();

        //вкл/откл истории операций
        var changeHistoryDisplay = new _historyDisplay2.default(id);
        changeHistoryDisplay.init();

        //вкл/откл меню настроек
        var MenuCalcBtn = new _menu2.default(id);
        MenuCalcBtn.init();
    }

    _createClass(Calc, [{
        key: 'init',
        value: function init() {

            // События на клик, ввод цифр 
            var keyNumbers = this.elem.querySelectorAll('.keynumber');
            for (var i = 0; i < keyNumbers.length; i++) {
                var keyNumber = keyNumbers[i];
                keyNumber.addEventListener('click', this.pressKeyNumber.bind(this));
            }

            // События на клик по операциям 
            var keyOperations = this.elem.querySelectorAll('.keyoperations');
            for (var _i = 0; _i < keyOperations.length; _i++) {
                var keyOperation = keyOperations[_i];
                keyOperation.addEventListener('click', this.operationAction.bind(this));
            }

            // События на клик, очистка калькулятора 
            var keyAc = this.elem.querySelector('.keyac');
            keyAc.addEventListener('click', this.operationClear.bind(this));

            // События на клик, добавление точки 
            var keyDot = this.elem.querySelector('.keydot');
            keyDot.addEventListener('click', this.pressKeyDot.bind(this));

            // События на клик, унарного минуса 
            var keyUniMin = this.elem.querySelector('.unomin');
            keyUniMin.addEventListener('click', this.operationUnoMinus.bind(this));
        }
    }, {
        key: 'pressKeyNumber',
        value: function pressKeyNumber(clickEvent) {

            var numb = clickEvent.target.textContent;

            if (this.entryNewNumber) {
                this.display.value = numb;
                this.historyDisplay.value += this.display.value;
                this.entryNewNumber = false;
            } else {
                if (this.display.value === '0') {
                    this.display.value = numb;
                    this.historyDisplay.value = this.display.value;
                } else {
                    this.display.value += numb;
                    this.historyDisplay.value += numb;
                }
            }
        }
    }, {
        key: 'pressKeyDot',
        value: function pressKeyDot() {
            var localMemoryDot = this.display.value;

            if (this.entryNewNumber) {
                localMemoryDot = '0.';
                this.entryNewNumber = false;
            } else {
                if (localMemoryDot.indexOf('.') === -1) {
                    localMemoryDot += '.';
                };
            };

            this.display.value = localMemoryDot;
            this.historyNumber = this.display.value;
            this.historyDisplay.value = this.historyNumber;
        }
    }, {
        key: 'operationUnoMinus',
        value: function operationUnoMinus() {

            var localMemoryNumber = this.display.value;

            if (localMemoryNumber != '0') {
                if (localMemoryNumber.indexOf('-') === -1) {
                    localMemoryNumber = '-' + localMemoryNumber;
                } else {
                    localMemoryNumber = localMemoryNumber.substr(1);
                };

                this.display.value = localMemoryNumber;
                this.historyNumber = this.display.value;
                this.historyDisplay.value = this.historyNumber;
            }
        }
    }, {
        key: 'operationAction',
        value: function operationAction(clickEvent) {

            var localMemoryNumber = this.display.value,
                symbol = clickEvent.target.textContent,
                nameSymbol = clickEvent.target.value;

            if (this.entryNewNumber && this.memoryOperation !== '=') {
                this.display.value = this.memoryCurrentNumber;
                this.memoryOperation = symbol;
                this.historyDisplay.value = this.display.value + this.memoryOperation;
            } else {
                if (nameSymbol !== '') {
                    this.entryNewNumber = true;
                    switch (nameSymbol) {
                        case '%':
                            this.historyDisplay.value += nameSymbol;
                            switch (this.memoryOperation) {
                                case '-':
                                    this.memoryCurrentNumber = this.memoryCurrentNumber - _operation2.default.percentage(this.memoryCurrentNumber, localMemoryNumber);
                                    break;
                                case '+':
                                    this.memoryCurrentNumber = this.memoryCurrentNumber + _operation2.default.percentage(this.memoryCurrentNumber, localMemoryNumber);
                                    break;
                                case '*':
                                    this.memoryCurrentNumber = _operation2.default.percentage(this.memoryCurrentNumber, localMemoryNumber);
                                    break;
                                case '/':
                                    this.memoryCurrentNumber = _operation2.default.percentage(this.memoryCurrentNumber, localMemoryNumber);
                                    break;
                            }
                            break;
                        case 'log':
                            this.memoryCurrentNumber = _operation2.default.log(localMemoryNumber);
                            break;
                        case 'rootx':
                            this.memoryCurrentNumber = _operation2.default.sqrt(localMemoryNumber);
                            break;
                        case 'n!':
                            this.memoryCurrentNumber = _operation2.default.factorial(localMemoryNumber);
                            break;
                        default:
                            this.memoryCurrentNumber = parseFloat(localMemoryNumber);
                    };

                    this.display.value = +this.memoryCurrentNumber.toFixed(10);
                    this.memoryOperation = nameSymbol;
                } else {
                    this.entryNewNumber = true;
                    switch (this.memoryOperation) {
                        case '+':
                            this.memoryCurrentNumber = _operation2.default.addition(this.memoryCurrentNumber, localMemoryNumber);
                            break;
                        case '-':
                            this.memoryCurrentNumber = _operation2.default.subtraction(this.memoryCurrentNumber, localMemoryNumber);
                            break;
                        case '*':
                            this.memoryCurrentNumber = _operation2.default.multiplication(this.memoryCurrentNumber, localMemoryNumber);
                            break;
                        case '/':
                            this.memoryCurrentNumber = _operation2.default.division(this.memoryCurrentNumber, localMemoryNumber);
                            break;
                        case 'xn':
                            this.memoryCurrentNumber = _operation2.default.exponentiation(this.memoryCurrentNumber, localMemoryNumber);
                            break;
                        case 'y√x':
                            this.memoryCurrentNumber = _operation2.default.mathroot(this.memoryCurrentNumber, localMemoryNumber);
                            break;
                        default:
                            this.memoryCurrentNumber = parseFloat(localMemoryNumber);
                    };

                    this.display.value = +this.memoryCurrentNumber.toFixed(10);
                    this.memoryOperation = symbol;

                    if (this.memoryOperation !== '=') {
                        this.historyDisplay.value += this.memoryOperation;
                    }
                };
            }
        }
    }, {
        key: 'operationClear',
        value: function operationClear() {
            this.display.value = 0;
            this.historyDisplay.value = '';
            this.historyNumber = '';
            this.historyArray = [];
            this.memoryCurrentNumber = 0;
            this.memoryOperation = '';
            this.entryNewNumber = true;
        }
    }]);

    return Calc;
}();

exports.default = Calc;

/***/ }),

/***/ "./src/js/calculator/core/historyDisplay.js":
/*!**************************************************!*\
  !*** ./src/js/calculator/core/historyDisplay.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Класс скрывает или показывает журнал истории операции.
 * Меняя класс-модификатор CSS.
 * Классу необходимо передать ID элемента.
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HistoryDisplay = function () {
    function HistoryDisplay(id) {
        _classCallCheck(this, HistoryDisplay);

        this.elem = document.querySelector(id);
    }

    _createClass(HistoryDisplay, [{
        key: 'init',
        value: function init() {

            // Иницилизация события на клик, отображение журнала истории операций
            var btnChangeHistory = this.elem.querySelector('.btnChangeHistory');
            btnChangeHistory.addEventListener('click', this.changeHistoryDisplay.bind(this));
        }
    }, {
        key: 'changeHistoryDisplay',
        value: function changeHistoryDisplay() {

            // Скрывает/показывает историю операций с помощью смены css класса
            var history = this.elem.querySelector('#history');
            history.classList.toggle('calc__display-history--none');
        }
    }]);

    return HistoryDisplay;
}();

exports.default = HistoryDisplay;

/***/ }),

/***/ "./src/js/calculator/core/themeType.js":
/*!*********************************************!*\
  !*** ./src/js/calculator/core/themeType.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Смена режима калькулятора между простым и инженерным.
 * Класс меняет ширину калькулятора добавляя класс-модификатор CSS.
 * Классу необходимо передать ID элемента.
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChangeThemeType = function () {
    function ChangeThemeType(id) {
        _classCallCheck(this, ChangeThemeType);

        this.elem = document.querySelector(id);
    }

    _createClass(ChangeThemeType, [{
        key: 'init',
        value: function init() {

            // Иницилизация события на клик, смена инженерного типа
            var btnChangeThemeType = this.elem.querySelector('.btnChangeThemeEngineering');
            btnChangeThemeType.addEventListener('click', this.changeType.bind(this));
        }
    }, {
        key: 'changeType',
        value: function changeType() {

            // Меняем ширину калькулятора с помощью сменой css класса
            this.elem.classList.toggle('calculator--width');

            // Отборажаем инженерные кнопки операций с помощью сменой css класса
            var keys = this.elem.querySelectorAll('.key-engineering');
            for (var i = 0; i < keys.length; i++) {
                keys[i].classList.toggle('key-engineering--none');
            }
        }
    }]);

    return ChangeThemeType;
}();

exports.default = ChangeThemeType;

/***/ }),

/***/ "./src/js/calculator/helpers/menu.js":
/*!*******************************************!*\
  !*** ./src/js/calculator/helpers/menu.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenuCalc = function () {
    function MenuCalc(id) {
        _classCallCheck(this, MenuCalc);

        this.elem = document.querySelector(id);
    }

    _createClass(MenuCalc, [{
        key: 'init',
        value: function init() {

            // Иницилизация события на клик, меню калькулятора
            var hamburgerBtn = this.elem.querySelector('.hamburger');
            hamburgerBtn.addEventListener('click', this.changeMenuBtn.bind(this));
        }
    }, {
        key: 'changeMenuBtn',
        value: function changeMenuBtn() {

            // Смена стилей иконки меню "гамбургера" (смена: линий <-> крестик)
            var menuCalcBtn = this.elem.querySelector('.hamburger__line');
            menuCalcBtn.classList.toggle('hamburger__line--active');

            // Смена стилей скрытого меню, выдвижение
            var menuCalcBtnMenu = this.elem.querySelector('.theme');
            menuCalcBtnMenu.classList.toggle('theme--active');
        }
    }]);

    return MenuCalc;
}();

exports.default = MenuCalc;

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
 * Смена темы, функция делает замену класса CSS на элементе.
 * Класс находит элемен с ID и проверяет наличие классов dark и light,
 * если класс есть убирает его, если нет добавляет.
 * По умолчание один из классов должен быть на элементе.
 * Классу необходимо передать ID элемента.
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChangeTheme = function () {
    function ChangeTheme(id) {
        _classCallCheck(this, ChangeTheme);

        this.elem = document.querySelector(id);
    }

    _createClass(ChangeTheme, [{
        key: 'init',
        value: function init() {

            // События на клик, смены цветовой темы 
            var btnChangeTheme = this.elem.querySelector('.btnChangeTheme');
            btnChangeTheme.addEventListener('click', this.changeTheme.bind(this));
        }
    }, {
        key: 'changeTheme',
        value: function changeTheme() {

            // меняет цветовую схему с помощью смены css класса
            var calc = this.elem.querySelector('.calc');
            calc.classList.toggle('dark');
            calc.classList.toggle('light');
        }
    }]);

    return ChangeTheme;
}();

exports.default = ChangeTheme;

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