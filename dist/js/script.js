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
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _helpers_operation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/operation */ "./src/js/calculator/helpers/operation.js");


 

var doc = document,
    display = doc.getElementById('display'),
    memoryCurrentNumber = 0,
    memoryOperation = '',
    entryNewNumber = false;

var init = function(){
       
    // События на клик, ввод цифр 
    let keyNumbers = doc.querySelectorAll('.keynumber');
    for (let i = 0; i < keyNumbers.length; i++){
        let keyNumber = keyNumbers[i];
        keyNumber.addEventListener('click', function(e){
            pressKeyNumber(e.target.textContent);
        });
    }


    // События на клик по операциям 
    let keyOperations = doc.querySelectorAll('.keyoperations');
    for (let i = 0; i<keyOperations.length; i++){
        let keyOperation = keyOperations[i];
        keyOperation.addEventListener('click', operationAction);
    }


    // События на клик, очистка калькулятора 
    let keyAc = doc.getElementById('keyac');
    keyAc.addEventListener('click', pressKeyClear);


    // События на клик, добавление точки 
    let keyDot = doc.getElementById('keydot');
    keyDot.addEventListener('click', pressKeyDot);
}



// Функция вывода цифр на экран

var pressKeyNumber = function(numb){

    if (entryNewNumber){
        display.value = numb;
        entryNewNumber = false;
    } else {
        if (display.value === '0'){
            display.value = numb;
        } else {
            display.value += numb;
        };
    };

};
    
    
// Функция отвечающия за операции
   
function operationAction(clickEvent){
           
     
    let localMemoryNumber = display.value,
        symbol = clickEvent.target.textContent,
        nameSymbol = clickEvent.target.value;

    if (entryNewNumber && memoryOperation !== '='){
        display.value = memoryCurrentNumber;
        memoryOperation = symbol;
    } else {
        if (nameSymbol !== ''){
            entryNewNumber = true;
            switch(nameSymbol){
                case 'log':
                    memoryCurrentNumber = _helpers_operation__WEBPACK_IMPORTED_MODULE_0__["default"].log(localMemoryNumber);
                    break;
                case 'rootx':
                    memoryCurrentNumber = _helpers_operation__WEBPACK_IMPORTED_MODULE_0__["default"].sqrt(localMemoryNumber);
                    break;
                case 'n!':
                    memoryCurrentNumber = _helpers_operation__WEBPACK_IMPORTED_MODULE_0__["default"].factorial(localMemoryNumber);
                    break;
                default:
                    memoryCurrentNumber = parseFloat(localMemoryNumber);
            };

            display.value = +memoryCurrentNumber.toFixed(10);
            memoryOperation = nameSymbol;

        } else{
            entryNewNumber = true;
            switch(memoryOperation){
                case '+':
                    memoryCurrentNumber = _helpers_operation__WEBPACK_IMPORTED_MODULE_0__["default"].addition(memoryCurrentNumber, localMemoryNumber);
                    break;
                case '-':
                    memoryCurrentNumber = _helpers_operation__WEBPACK_IMPORTED_MODULE_0__["default"].subtraction(memoryCurrentNumber, localMemoryNumber);
                    break;
                case '*':
                    memoryCurrentNumber = _helpers_operation__WEBPACK_IMPORTED_MODULE_0__["default"].multiplication(memoryCurrentNumber, localMemoryNumber);
                    break;
                case '/':
                    memoryCurrentNumber = _helpers_operation__WEBPACK_IMPORTED_MODULE_0__["default"].division(memoryCurrentNumber, localMemoryNumber);
                    break;
                case 'xn':
                    memoryCurrentNumber = _helpers_operation__WEBPACK_IMPORTED_MODULE_0__["default"].exponentiation(memoryCurrentNumber, localMemoryNumber);
                    break;
                case 'y√x':
                    memoryCurrentNumber = _helpers_operation__WEBPACK_IMPORTED_MODULE_0__["default"].mathroot(memoryCurrentNumber, localMemoryNumber);
                    break;
                default:
                    memoryCurrentNumber = parseFloat(localMemoryNumber);
            };
            
            display.value = +memoryCurrentNumber.toFixed(10);
            memoryOperation = symbol;
        };
        
    };

};



// Функция точки, 

function pressKeyDot(){

    var localMemoryDot = display.value;

    if (entryNewNumber){
        localMemoryDot = '0.';
        entryNewNumber = false;
    } else {
        if (localMemoryDot.indexOf('.') === -1){
            localMemoryDot += '.';
        };
    };

    display.value = localMemoryDot;

};



// Функция полной очистки значений калькулятора

function pressKeyClear(){
    display.value = 0;
    memoryCurrentNumber = 0;
    memoryOperation = '';
    entryNewNumber = true;
    
};






/***/ }),

/***/ "./src/js/calculator/helpers/operation.js":
/*!************************************************!*\
  !*** ./src/js/calculator/helpers/operation.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

  
var operations = {
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
}






/* harmony default export */ __webpack_exports__["default"] = (operations);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theming_themeColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theming/themeColor */ "./src/js/theming/themeColor.js");
/* harmony import */ var _theming_themeType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theming/themeType */ "./src/js/theming/themeType.js");
/* harmony import */ var _calculator_calculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculator/calculator */ "./src/js/calculator/calculator.js");











_theming_themeColor__WEBPACK_IMPORTED_MODULE_2__["init"]();

_theming_themeType__WEBPACK_IMPORTED_MODULE_3__["init"]();

_calculator_calculator__WEBPACK_IMPORTED_MODULE_4__["init"]();



/***/ }),

/***/ "./src/js/theming/themeColor.js":
/*!**************************************!*\
  !*** ./src/js/theming/themeColor.js ***!
  \**************************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });


/**
 * Смена темы, функция делает замену классов на элементе.
 * Функция находит элемен с ID calc и проверяет наличие классов dark и light,
 * если класс есть убирает его, если нет добавляет.
 * По умолчание один из классов должен быть на элементе.
 */
var doc = document;

var changeTheme = function(){

    let calc = doc.getElementById('calc');
    calc.classList.toggle('dark');
    calc.classList.toggle('light');

};

/* События на клик, смены цветовой темы */
var init = function() {
    let btnChangeTheme = doc.getElementById('btnChangeTheme');
    btnChangeTheme.addEventListener('click', changeTheme);
}




/***/ }),

/***/ "./src/js/theming/themeType.js":
/*!*************************************!*\
  !*** ./src/js/theming/themeType.js ***!
  \*************************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });


/**
 * Смена режима калькулятора между простым и инженерным.
 * Функция меняет ширину калькулятора добавляя класс-модификатор и
 * изменяет стили в CSS 
 */
var doc = document;

var changeThemeType = function(){

    let calc = doc.getElementById('calculator'),
        keys = doc.querySelectorAll('.key-engineering');

    calc.classList.toggle('calculator--width');

    for (let i = 0; i < keys.length; i++){
        keys[i].classList.toggle('key-engineering--none');
    }

};

/* События на клик, смены типа калькулятора */
var init = function(){
    let btnChangeThemeType = doc.getElementById('btnChangeThemeEngineering');
    btnChangeThemeType.addEventListener('click', changeThemeType);
}




/***/ })

/******/ });
//# sourceMappingURL=script.js.map