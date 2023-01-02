"use strict";
exports.__esModule = true;
var path = require("path");
var fs = require("fs");
var data = fs
    .readFileSync(path.join(__dirname, './data.txt'), 'utf-8')
    .split('\r\n')
    .map(function (pair) {
    return pair
        .split(',')
        .map(function (ids) { return ids.split('-'); })
        .flat();
});
function calcOverlaps(data) {
    var counter = 0;
    data.forEach(function (pair) {
        if ((+pair[1] >= +pair[2] && +pair[1] <= +pair[3]) ||
            (+pair[0] <= +pair[3] && +pair[0] >= +pair[2]) ||
            (+pair[0] <= +pair[2] && +pair[1] >= +pair[3])) {
            console.log(pair);
            ++counter;
        }
    });
    return counter;
}
console.log(calcOverlaps(data));
