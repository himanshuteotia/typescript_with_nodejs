"use strict";
/**
 * installation command -: npm install -g typescript ts-node
 *
 */
exports.__esModule = true;
// typescript = Javascript + A type system ()
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});
