const media = 6;
const alunosArray = [
    { nome: 'Vitor', nota: 8.5 },
    { nome: 'Rogério', nota: 2.5 },
    { nome: 'Vitória', nota: 5 },
    { nome: 'Ana', nota: 10 },
    { nome: 'Michele', nota: 6 },
]

 function verificarAprovados(alunosArray,media){

    const alunosAprovados = alunosArray.filter(array => {
        return array.nota >=media;
})
return alunosAprovados
 }

console.log(verificarAprovados(alunosArray,media));