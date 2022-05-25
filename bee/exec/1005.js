var input = require('fs').readFileSync('./bee/exec/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift()) * 3.5;
var B = parseFloat(lines.shift()) * 7.5;
var MEDIA = ((A + B) / 11).toFixed(5);

console.log('MEDIA = ' + MEDIA);