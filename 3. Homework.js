const ciudades = ["miami", "nueva york", "mar del plata", "asturias"];

//! Sacando el último elemento:
const popArr = (a) => a.pop();

console.log(popArr(ciudades));

//! Agregando un elemento al final y viendo el nuevo largo del "array":
const pushArr = (a) => a.push("mitad asturiana siempre");

console.log(pushArr(ciudades));

console.log(ciudades);

//*

const dinosaurios = [
  "tiranosaurio rex",
  "nyasasaurus",
  "theropoda",
  "sauropoda",
];

//! Sacando el último elemento:
function popArr1(a) {
  return a.pop();
}

console.log(popArr1(dinosaurios));

//! Agregando un elemento al final y viendo el nuevo largo del "array":

function pushArr1(a) {
  return a.push("mitad asturiana siempre");
}

console.log(pushArr1(dinosaurios));

console.log(dinosaurios);

//*

const vehiculos = ["tren", "avion", "auto", "bici"];

//! Sacando el primer elemento con "arrows":

const shiftArr = (a) => a.shift();

console.log(shiftArr(vehiculos));

console.log(vehiculos[1]);

//*
//! Sacando el primer elemento con "functions":

function shiftArr1(a) {
  return a.shift();
}

console.log(shiftArr1(vehiculos));

console.log(vehiculos[0]);

//*
//! Agregando el primer elemento con "arrows":

const unshiftArr = (a) => a.unshift();

console.log(unshiftArr(vehiculos));

console.log(vehiculos[0]);

//*
//! Agregando el primer elemento con "functions":

function unshiftArr1(a) {
  return a.unshift();
}

console.log(unshiftArr1(vehiculos));

console.log(vehiculos[0]);
