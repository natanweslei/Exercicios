var input = require('fs').readFileSync('./bee/exec/stdin', 'utf8');
var lines = input.split('\n');

var nome = lines.shift();
var fixo = parseFloat(lines.shift());
var vendas = parseFloat(lines.shift()) * 15 / 100;

console.log('TOTAL = R$ ' + (fixo + vendas).toFixed(2));