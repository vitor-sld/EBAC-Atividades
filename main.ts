const num1:number = 4;
const num2:number = 7;
const nome:string = "Vitor";


console.log(multiplicarValores(num1,num2));
console.log(dizOi(nome));


function multiplicarValores(valor1: number, valor2: number):string {
    return `${valor1} * ${valor2} = ${valor1*valor2}`;
}

function dizOi(user: string):string {
    return `Olá ${user}`;
}
