"use strict";

// Opción 1

function BinarioADecimal(num) {
  let rta = 0;
  for (let i = 0; i < num.length; i++) {
    if (num !== 0) {
      rta += num[i] * 2 ** (num.length - 1 - i);
    }
  }
  return rta;
}

// Opción 2

function BinarioADecimal(num) {
  let decimal = 0;
  let binario = num.toString();
  let binarioArray = binario.split("");
  let binarioArrayReverse = binarioArray.reverse();
  for (let i = 0; i < binarioArrayReverse.length; i++) {
    if (binarioArrayReverse[i] == 1) {
      decimal += Math.pow(2, i);
    }
  }
  return decimal;
}

// Opción 3

function BinarioADecimal(num) {
  let rta = 0;
  let binario = Array.from(num).reverse();
  for (let i = 0; i < binario.length; i++) {
    rta = rta + Math.pow(2, i) * binario[i];
  }
  return rta;
}

// ----------------------------------------------------------

// Opción 1

function DecimalABinario(num) {
  return num.toString(2);
}

// Opción 2

function DecimalABinario(num) {
  let resultado = "";
  do {
    resultado += num % 2;
    num = Math.trunc(num / 2);
  } while (num !== 0);
  return resultado.split("").reverse().join("");
}

// Opción 3

function DecimalABinario(num) {
  let binario = "";
  let binarioArray = [];
  let binarioArrayReverse = [];
  let resto = 0;
  while (num > 0) {
    resto = num % 2;
    num = Math.floor(num / 2);
    binarioArray.push(resto);
  }
  binarioArrayReverse = binarioArray.reverse();
  binario = binarioArrayReverse.join("");
  return binario;
}

// Opción 4

function DecimalABinario(num) {
  if (num == 0) return "";
  return DecimalABinario(Math.floor(num / 2)).toString() + (num % 2).toString();
}

// Opción 5

function DecimalABinario(num) {
  let array = [];
  let str = "";
  for (let i = 0; i < 9999; i++) {
    if (num < 1) {
      break;
    }
    let a = num % 2;
    array.unshift(a);
    num = Math.floor(num / 2);
  }
  for (let i = 0; i < array.length; i++) {
    str = str + array[i];
  }
  return str;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
