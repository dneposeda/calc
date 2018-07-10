'use strict';

import 'normalize.css';
import '../css/style.css';
import * as changeTheme from './theming/themeColor';
import * as changeThemeType from './theming/themeType';
import * as pressKey from './calculator/calculator';




changeTheme.init();

changeThemeType.init();

pressKey.init();

