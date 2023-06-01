"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) return array;

  // Primer elemento del array
  // let pivot = array[0];

  // Último elemento del array
  // let pivot = array[array.length - 1];

  // Elemento random
  // let index = Math.floor(Math.random() * array.length);

  // Elemento central del array
  let index = Math.floor(array.length / 2);
  let pivot = array[index];

  let left = [];
  let right = [];

  // Primer elemento del array
  //for (let i = 1; i < array.length; i++) {

  // Último elemento del array
  //for (let i = 0; i < array.length - 1; i++) {

  // Elemento central o random del array
  for (let i = 0; i < array.length; i++) {
    
    // Este condicional sólo es necesario si tratamos
    // con un pivote definido como el elemento central
    // o random del array
    if (i === index) {
      continue;
    } else {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  }

  return quickSort(left).concat(pivot).concat(quickSort(right));

  // Spread Operator
  // return [...quickSort(left), pivot, ...quickSort(right)];
}

// Opción 1

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) return array;

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  array = [];

  left = mergeSort(left);
  right = mergeSort(right);

  while (left.length && right.length) {
    left[0] < right[0] ? array.push(left.shift()) : array.push(right.shift());
  }

  return array.concat(left, right);
}

// Opción 2

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) return array;

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let leftInd = 0;
  let rightInd = 0;

  let arrOrdered = [];

  while (leftInd < left.length && rightInd < right.length) {
    if (left[leftInd] < right[rightInd]) {
      arrOrdered.push(left[leftInd]);
      leftInd++;
    } else {
      arrOrdered.push(right[rightInd]);
      rightInd++;
    }
  }

  return arrOrdered.concat(left.slice(leftInd)).concat(right.slice(rightInd));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
