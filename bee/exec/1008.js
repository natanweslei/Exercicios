var input = require('fs').readFileSync('./bee/exec/stdin', 'utf8');
var lines = input.split('\n');

var numero = lines.shift();
var horas = parseFloat(lines.shift());
var valor = parseFloat(lines.shift());

console.log('NUMBER = ' + numero);
console.log('SALARY = U$ ' + (horas * valor).toFixed(2));