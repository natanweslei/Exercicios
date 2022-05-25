var input = require('fs').readFileSync('./bee/exec/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift()) * 2;
var B = parseFloat(lines.shift()) * 3;
var C = parseFloat(lines.shift()) * 5;

var MEDIA = ((A + B + C) / 10).toFixed(1);

console.log('MEDIA = ' + MEDIA);