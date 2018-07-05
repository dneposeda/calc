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
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme */ "./src/js/theme.js");





var doc = document,
    btnChengeTheme = doc.getElementById('btnChengeTheme'),
    keyNumbers = doc.querySelectorAll('.keynumber'),
    keyOperations = doc.querySelectorAll('.keyoperations'),
    keyAc = doc.getElementById('keyac'),
    keyDot = doc.getElementById('keydot'),
    display = doc.getElementById('display'),
    memoryCurrentNumber = 0,
    memoryOperation = '',
    entryNewNumber = false;


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



function pressKeyOperation(symbol){
    
    var localMemoryNumber = display.value;
    
    if (entryNewNumber && memoryOperation !== '='){
        display.value = memoryCurrentNumber;
        memoryOperation = symbol;
    } else {
        entryNewNumber = true;
        switch(memoryOperation){
            case '+':
                memoryCurrentNumber += parseFloat(localMemoryNumber);
                break;
            case '-':
                memoryCurrentNumber -= parseFloat(localMemoryNumber);
                break;
            case '*':
                memoryCurrentNumber *= parseFloat(localMemoryNumber);
                break;
            case '/':
                memoryCurrentNumber /= parseFloat(localMemoryNumber);
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
function pressKeyDot(dot){

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



/* События на клик смены темы */
btnChengeTheme.addEventListener('click', _theme__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* События на клик по цифрам */
for (var i = 0; i<keyNumbers.length; i++){
    var keyNumber = keyNumbers[i];
    keyNumber.addEventListener('click', function(e){
        pressKeyNumber(e.target.textContent);
    });
}

/* События на клик по операциям */
for (var i = 0; i<keyOperations.length; i++){
    var keyOperation = keyOperations[i];
    keyOperation.addEventListener('click', function(e){
        pressKeyOperation(e.target.textContent);
    });
}

/* События на клик очистки */
keyAc.addEventListener('click', pressKeyClear);

/* События на клик точки */
keyDot.addEventListener('click', function(e){
    pressKeyDot(e.target.textContent);
});


/***/ }),

/***/ "./src/js/theme.js":
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
/*! exports provided: chengeTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chengeTheme", function() { return chengeTheme; });


/**
 * Смена темы, функция делает замену классов на элементе.
 * Функция находит элемен с ID calc и проверяет наличие классов dark и light,
 * если класс есть убирает его, если нет добавляет.
 * По умолчание один из классов должен быть на элементе.
 */
    var chengeTheme = function(){

        var calc = document.getElementById('calc');
        calc.classList.toggle('dark');
        calc.classList.toggle('light');
   
    };

var chengeTheme;

/***/ })

/******/ });
//# sourceMappingURL=script.js.map