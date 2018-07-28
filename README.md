# Project: Calculator
Посмотреть проект можно по ссылке - [https://test.teatlt.ru/calc/](https://test.teatlt.ru/calc/)

На проекте используется сборка Webpack 4 и имеет два файла конфигурации:
1.	**webpack.dev.js** –  конфигурация для разработки, собранный проект кладет в папку ./dist/dev, не сжимает, source maps присутствует.
В *index.html* выводиться сообщение «Development mode» в заголовке `<h1>` (для этого используется плагин *HtmlWebpackPlugin*).
Для запуска используется команда – `npm run build:dev`
2.	**webpack.prod.js** – конфигурация для выгрузки на сервер, собранный проект кладет в папку ./dist/prod, сжимает файлы .css и .js, source maps удалены.
В *index.html* выводиться сообщение «Production mode» в заголовке `<h1>` (для этого используется плагин *HtmlWebpackPlugin*).
Для запуска используется команда – `npm run build:dev`


В Webpack подключен транспайлер BabelJS.


***
### ES6 in the project.
Использую `let` для ограничения видимости переменных.

Стрелочные функции `=>` для удобства и сокращения.

Код разбит на модули с использование `import` и `export` 

Так же в проекте используются `class`.

***
### Patterns in the project.
В `index.js` применены паттерны:

Модуль - [3-5] (использование import/export)

Фабрика - [7-10] 

В `calculator/calculator.js` применены паттерны:

Модуль - [3-7] (использование import/export)

Наблюдатель - [42-66] (addEventListener запускает функцию только при клике)

***
### Back-end Node.JS WebSocket

Запуск сервера Node.JS `npm run server`.

Настройки web-сервера и WebSocket в файле **server.js**

В `./backend/calc_rur.js` логика обработки входящий запросов на сервере

***
### Built With

* [Webpack](https://webpack.js.org/)
* [JavaScript](https://www.javascript.com/)
* [Babel](https://babeljs.io/)
* [SASS](https://sass-lang.com/)
* [PostCSS](https://postcss.org/)
* [Normalize.css](https://necolas.github.io/normalize.css/)
* [WebSockets](https://developer.mozilla.org/ru/docs/WebSockets)

***
### Author
* **Denis Tivikov**


