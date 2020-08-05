/*
Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

const numeroDivisilPorTres = function (numero) {
   return (numero % 3) === 0
}

console.log(numeroDivisilPorTres(9))