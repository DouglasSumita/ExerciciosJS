/* Filter 
   Conceiro: Processa cada elemento do array, somando os valores do indice anterior com o proximo
*/

const alunos = [
    { nome: 'Douglas Sumita', nota: 6.5, curso: 'Analise e Desenvolvimento de Sistemas' },
    { nome: 'Tais Nicolau', nota: 8.1, curso: 'Pedagogia' },
    { nome: 'Amanda Karine', nota: 8.5, curso: 'Gestão de Recursos Humanos' },
]

const totalNotas = alunos.map(aluno => aluno.nota).reduce(function(somaNotas, proximaNota) {
    return somaNotas + proximaNota
})

console.log(totalNotas)

// Passando valor inicial para o reduce.
// Variando formas de escrever arrow functions para fins didáticos.
const valorInicial = 1
const totalNotas2 = alunos.map((aluno) => aluno.nota).reduce((soma, proximaNota) => { 
    return soma + proximaNota
}, valorInicial)

console.log(totalNotas2)