"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  // 24 | 2
  // 12 | 2
  //  6 | 2
  //  3 | 3
  //  1 | 1

  // Opción 1

  let factores = [1];
  if (num === 1) return factores;
  let primos = [];
  for (let i = 0; i < num; i++) {
    if (esPrimo(i)) primos.push(i);
  }
  let i = 0;
  while (num > 1) {
    if (num % primos[i] === 0) {
      factores.push(primos[i]);
      num = num / primos[i];
    } else {
      i++;
    }
  }
  return factores;

  // Opción 2

  let arr = [1];
  let numTotal = num;
  for (let i = 2; i < num; i++) {
    while (numTotal % i === 0) {
      arr.push(i);
      numTotal = numTotal / i;
    }
  }
  return arr;

  // Opción 3

  let arrayPrimos = [1];
  let numP = num;
  let i = 2;
  while (numP > 1) {
    if (numP % i == 0) {
      numP = numP / i;
      arrayPrimos.push(i);
    } else {
      i++;
    }
  }
  return arrayPrimos;
}

function esPrimo(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// ------------------------------------------------------------------------------

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // Opción 1

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux;
      }
    }
  }
  return array;

  // Opción 2

  let aux;
  let sw = true;
  while (sw) {
    sw = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        // aux = array[i];
        // array[i] = array[i + 1];
        // array[i + 1] = aux;
        swap(array, i, i + 1);
        sw = true;
      }
    }
  }
  return array;
}

// ------------------------------------------------------------------------------

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // Opción 1

  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0) {
      if (array[j - 1] > array[j]) {
        // let aux = array[j];
        // array[j] = array[j - 1];
        // array[j - 1] = aux;
        swap(array, j, j - 1);
      } else {
        j--;
      }
    }
  }
  return array;

  // Opción 2

  for (let i = 0; i < array.length; i++) {
    let min = i;
    while (min > 0 && array[min] < array[min - 1]) {
      [array[min], array[min - 1]] = [array[min - 1], array[min]];
      min--;
    }
  }
  return array;
}

// ------------------------------------------------------------------------------

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < array.length - 1; i++) {
    let menorInd = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[menorInd]) {
        menorInd = j;
      }
    }
    if (i !== menorInd) {
      // let aux = array[i];
      // array[i] = array[menorInd];
      // array[menorInd] = aux;
      swap(array, i, menorInd);
    }
  }
  return array;
}

// Complejidad de ordenamientos = O(n**2)

// Modularización del intercambio de posiciones

function swap(array, a, b) {
  // let aux = array[a];
  // array[a] = array[b];
  // array[b] = aux;
  [array[a], array[b]] = [array[b], array[a]];
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
