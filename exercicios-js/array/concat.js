/* Concat
   Conceito: Concatenar elementos em um novo array.
*/

const notas = [7, 6, 5]
const notas2 = [8, 5, 4]
const notaAvulsa = 6
const todasNotas = notas.concat(notas2, notaAvulsa, [[6, 7]], {nota: 9})
console.log(todasNotas)
console.log([].concat(8, 7, 9, 10))