'use strict';

import 'normalize.css';
import '../css/style.css';
import Calc from './calculator/calculator';

var calc = new Calc('#calculator');
calc.init();

var calc2 = new Calc('#calculator2');
calc2.init();