const { clearScreenDown } = require("readline");

function VerificarNumeroParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  }

  return "Impar";
}

// console.log(VerificarNumeroParOuImpar(947));

function TransformarVogaisEmMaiusculo(palavra) {
  let vogais = ["A", "E", "I", "O", "U"];
  let palavraAux = Array.from(palavra);
  let palavraRetorno = [];
  let encontrou = false;

  for (let i in palavraAux) {
    encontrou = false;

    for (let j in vogais) {
      if (palavraAux[i].toUpperCase() === vogais[j]) {
        palavraRetorno.push(palavraAux[i].toUpperCase());
        encontrou = true;
      }
    }

    if (!encontrou) {
      palavraRetorno.push(palavraAux[i]);
    }
  }

  return palavraRetorno.join("");
}

// alert(TransformarVogaisEmMaiusculo(prompt('Informe a palavra!')));

function HexaToDecimal(valorHexa) {
  let valorHexaAux = valorHexa.split("").reverse();
  let resultado = 0;

  for (const i in valorHexaAux) {
    switch (valorHexaAux[i].toUpperCase()) {
      case "A":
        valorHexaAux[i] = 10;
        break;

      case "B":
        valorHexaAux[i] = 11;
        break;

      case "C":
        valorHexaAux[i] = 12;
        break;

      case "D":
        valorHexaAux[i] = 13;
        break;

      case "E":
        valorHexaAux[i] = 14;
        break;

      case "F":
        valorHexaAux[i] = 15;
        break;

      default:
        break;
    }
  }

  for (const i in valorHexaAux) {
    resultado = resultado + 16 ** i * valorHexaAux[i];
  }

  return resultado;
}

// console.log(
//     HexaToDecimal('2F3'),
//     HexaToDecimal('216'),
//     HexaToDecimal('b77')
// );

// Exemplo:
// chaves = ['[{}]', '[{]{'];

// *As chaves na primeira string '[{}]' são balanceadas, porque todas as chaves são fechadas e todas as chaves aninhadas são fechadas em ordem.
function matchingBraces(braces) {
  // Write your code here
  let results = [];
  let inverso = "";

  for (let brace of braces) {
    if (brace.length % 2 > 0) {
      results.push("NO");
      continue;
    }

    tudoIgual = true;

    for (let i = 0; i <= brace.length; i++) {
      if (brace[brace.length - (i + 1)] == "]") {
        inverso = "[";
      } else if (brace[brace.length - (i + 1)] == "}") {
        inverso = "{";
      } else if (brace[brace.length - (i + 1)] == ")") {
        inverso = "(";
      }

      tudoIgual = tudoIgual & (brace[i] == inverso);

      if (i + 1 == brace.length / 2) {
        break;
      }
    }

    if (tudoIgual) {
      results.push("YES");
    } else {
      results.push("NO");
    }
  }

  return results;
}

function VerificarYesNo(vetor) {
  let vetorAux = vetor;

  for (const i in vetorAux) {
    vetorAux = vetorAux[i].split("");
  }

  return vetorAux;
}

// let vetor = ['[{}]','[{]}','{[]','([])'];
let vetor = ["[{}]"];

// console.log(VerificarYesNo(vetor));

// console.log(matchingBraces(vetor));

// var a = parseInt(lines.shift());
// var b = parseInt(lines.shift());
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var cedulas = [100, 50, 20, 10, 5, 2, 1];
var valor = parseInt(lines.shift());
var valorDecomposto = valor;
var diferenca = 0;

// while (valorDecomposto != 0) {
  if (valorDecomposto > 100) {
    valorDecomposto = valor - 100;
  }
// }

// console.log();

const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

nomes.forEach(function(nome, i) {
    console.log('[forEach]', nome, i);
})
