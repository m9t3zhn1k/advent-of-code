"use strict";
exports.__esModule = true;
var path = require("path");
var fs = require("fs");
var data = fs.readFileSync(path.join(__dirname, './data.txt'), 'utf-8');
var count = 0;
data.split('').some(function (_, index, array) {
    if (index < 3) {
        return false;
    }
    else {
        count = index + 1;
        if (Array.from(new Set(array.slice(index - 3, index + 1))).length === 4) {
            return true;
        }
        return false;
    }
});
console.log(count);
