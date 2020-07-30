/* 
1) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
 */

const soma = (a, b) => a + b
const subtracao = (a, b) => a - b
const multiplicacao = (a, b) => a * b
const divisao = (a, b) => a / b

function operacoesAritmeticas(x, y) {
    const operacoesAritmeticas = [soma, subtracao, multiplicacao, divisao]
    operacoesAritmeticas.forEach((result) => {
        console.log(result.name, '=', result(x,y))
    })

}

operacoesAritmeticas(10, 2)