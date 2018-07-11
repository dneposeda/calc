'use strict';

import 'normalize.css';
import '../css/style.css';
import Calc from './calculator/calculator';

// changeThemeType.init();

var calc = new Calc('#calculator');
calc.init();

var calc2 = new Calc('#calculator2');
calc2.init();