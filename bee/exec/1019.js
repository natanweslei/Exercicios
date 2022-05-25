var input = require('fs').readFileSync('./bee/exec/stdin', 'utf8');
var lines = input.split('\n');

var segundos = parseInt(lines.shift());
var h = segundos / 3600;
var resto = segundos % 3600;
var m = resto / 60;
var s = resto % 60;

console.log(parseInt(h) + ":" + parseInt(m) + ":" + parseInt(s));