"use strict";
const num1 = 4;
const num2 = 7;
const nome = "Vitor";
console.log(multiplicarValores(num1, num2));
console.log(dizOi(nome));
function multiplicarValores(valor1, valor2) {
    return `${valor1} * ${valor2} = ${valor1 * valor2}`;
}
function dizOi(user) {
    return `Olá ${user}`;
}
