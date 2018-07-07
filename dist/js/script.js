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

/***/ "./src/js/calculator.js":
/*!******************************!*\
  !*** ./src/js/calculator.js ***!
  \******************************/
/*! exports provided: pressKeyNumber, pressKeyOperation, pressKeyDot, pressKeyClear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pressKeyNumber", function() { return pressKeyNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pressKeyOperation", function() { return pressKeyOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pressKeyDot", function() { return pressKeyDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pressKeyClear", function() { return pressKeyClear; });
/* harmony import */ var _helper_operation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper/operation */ "./src/js/helper/operation.js");


 

var doc = document,
    display = doc.getElementById('display'),
    memoryCurrentNumber = 0,
    memoryOperation = '',
    entryNewNumber = false;



/**
 * Функция вывода цифр на экран
 */
function pressKeyNumber(numb){

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
    
    
/**
 *
 *  Функция отвечающия за операции
 */    
function pressKeyOperation(symbol){
           
    var localMemoryNumber = display.value;

    if (entryNewNumber && memoryOperation !== '='){
        display.value = memoryCurrentNumber;
        memoryOperation = symbol;
    } else {
        entryNewNumber = true;
        switch(memoryOperation){
            case '+':
                memoryCurrentNumber = Object(_helper_operation__WEBPACK_IMPORTED_MODULE_0__["addition"])(memoryCurrentNumber, localMemoryNumber);
                break;
            case '-':
                memoryCurrentNumber = Object(_helper_operation__WEBPACK_IMPORTED_MODULE_0__["subtraction"])(memoryCurrentNumber, localMemoryNumber);
                break;
            case '*':
                memoryCurrentNumber = Object(_helper_operation__WEBPACK_IMPORTED_MODULE_0__["multiplication"])(memoryCurrentNumber, localMemoryNumber);
                break;
            case '/':
                memoryCurrentNumber = Object(_helper_operation__WEBPACK_IMPORTED_MODULE_0__["division"])(memoryCurrentNumber, localMemoryNumber);
                break;
            default:
                memoryCurrentNumber = parseFloat(localMemoryNumber);
        };
        
        display.value = +memoryCurrentNumber.toFixed(10);
        memoryOperation = symbol;
    };

};


/**
 * Функция точки, 
 */
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


/**
 * Функция полной очистки значений калькулятора
 */
function pressKeyClear(){
    display.value = 0;
    memoryCurrentNumber = 0;
    memoryOperation = '';
    entryNewNumber = true;
    
};






/***/ }),

/***/ "./src/js/helper/operation.js":
/*!************************************!*\
  !*** ./src/js/helper/operation.js ***!
  \************************************/
/*! exports provided: addition, subtraction, multiplication, division */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addition", function() { return addition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtraction", function() { return subtraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplication", function() { return multiplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "division", function() { return division; });

  

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
/* harmony import */ var _themeColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themeColor */ "./src/js/themeColor.js");
/* harmony import */ var _themeType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./themeType */ "./src/js/themeType.js");
/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculator */ "./src/js/calculator.js");









var doc = document;


/* События на клик, смены цветовой темы */
var btnChangeTheme = doc.getElementById('btnChangeTheme');
btnChangeTheme.addEventListener('click', _themeColor__WEBPACK_IMPORTED_MODULE_2__["default"]);


/* События на клик, смены типа калькулятора */
var btnChangeThemeType = doc.getElementById('btnChangeThemeEngineering');
btnChangeThemeType.addEventListener('click', _themeType__WEBPACK_IMPORTED_MODULE_3__["default"]);


/* События на клик, ввод цифр */
var keyNumbers = doc.querySelectorAll('.keynumber');

for (let i = 0; i < keyNumbers.length; i++){
    let keyNumber = keyNumbers[i];
    keyNumber.addEventListener('click', function(e){
        Object(_calculator__WEBPACK_IMPORTED_MODULE_4__["pressKeyNumber"])(e.target.textContent);
    });
}


/* События на клик по операциям */
var keyOperations = doc.querySelectorAll('.keyoperations');

for (let i = 0; i<keyOperations.length; i++){
    let keyOperation = keyOperations[i];
    keyOperation.addEventListener('click', function(e){
        Object(_calculator__WEBPACK_IMPORTED_MODULE_4__["pressKeyOperation"])(e.target.textContent);
    });
}


/* События на клик, очистка калькулятора */
var keyAc = doc.getElementById('keyac');
keyAc.addEventListener('click', _calculator__WEBPACK_IMPORTED_MODULE_4__["pressKeyClear"]);


/* События на клик, добавление точки */
var keyDot = doc.getElementById('keydot');
keyDot.addEventListener('click', _calculator__WEBPACK_IMPORTED_MODULE_4__["pressKeyDot"]);


/***/ }),

/***/ "./src/js/themeColor.js":
/*!******************************!*\
  !*** ./src/js/themeColor.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/**
 * Смена темы, функция делает замену классов на элементе.
 * Функция находит элемен с ID calc и проверяет наличие классов dark и light,
 * если класс есть убирает его, если нет добавляет.
 * По умолчание один из классов должен быть на элементе.
 */
    var changeTheme = function(){

        var calc = document.getElementById('calc');
        calc.classList.toggle('dark');
        calc.classList.toggle('light');
   
    };

/* harmony default export */ __webpack_exports__["default"] = (changeTheme);

/***/ }),

/***/ "./src/js/themeType.js":
/*!*****************************!*\
  !*** ./src/js/themeType.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/**
 * Смена режима калькулятора между простым и инженерным.
 * Функция меняет ширину калькулятора добавляя класс-модификатор и
 * изменяет стили в CSS 
 */
    var changeThemeType = function(){

        let calc = document.getElementById('calculator'),
            keys = document.querySelectorAll('.key-engineering');

        calc.classList.toggle('calculator--width');

        for (var i = 0; i < keys.length; i++){
            keys[i].classList.toggle('key-engineering--none');
        }
        
        
        
   
    };

/* harmony default export */ __webpack_exports__["default"] = (changeThemeType);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map