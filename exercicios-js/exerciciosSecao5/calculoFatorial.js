/*
 Faça um algoritmo que calcule o fatorial de um número.
*/

function retornaFatorial(numero) {
   for (let i = numero - 1; i > 1; i--) {
       numero *= i
   }
   return numero
}

console.log(retornaFatorial(7))
