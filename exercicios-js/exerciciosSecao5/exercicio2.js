/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function classificacaoTriangulo(ladoA, ladoB, ladoC) {

    let classificacao = "Escaleno"
    
    if (ladoA === ladoB && ladoB === ladoC) {
        classificacao = "Equilátero"
    } else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        classificacao = "Isósceles"
    }

    return classificacao
}

console.log(classificacaoTriangulo(11, 11, 11))