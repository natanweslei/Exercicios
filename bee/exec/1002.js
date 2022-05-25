var input = require("fs").readFileSync("./bee/exec/stdin", "utf8");
var lines = input.split("\n");

var n = 3.14159;
var raio = parseFloat(lines.shift());

console.log("A=" + (n * raio ** 2).toFixed(4));
