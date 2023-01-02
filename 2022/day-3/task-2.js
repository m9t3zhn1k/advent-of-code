"use strict";
exports.__esModule = true;
var path = require("path");
var fs = require("fs");
var data = fs
    .readFileSync(path.join(__dirname, './data.txt'), 'utf-8')
    .split('\n')
    .map(function (string) { return string.substring(0, string.length - 1); })
    .slice(0, 300);
var subData = [];
var subArrayLength = 3;
for (var i = 0; i < data.length; i += subArrayLength) {
    subData.push(data.slice(i, i + subArrayLength));
}
var commonLetters = subData.map(function (rucksacks) {
    var result = '';
    rucksacks[0].split('').some(function (letter) {
        var common = rucksacks.every(function (rucksack) { return rucksack.includes(letter); });
        if (common) {
            result = letter;
        }
    });
    return result;
});
var result = commonLetters.reduce(function (acc, letter) {
    return (acc +=
        letter.codePointAt(0) - 'a'.codePointAt(0) >= 0
            ? letter.codePointAt(0) - 'a'.codePointAt(0) + 1
            : letter.codePointAt(0) - 'A'.codePointAt(0) + 27);
}, 0);
console.log(result);
