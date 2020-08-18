const alunos = [
    { nome: 'João', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: true },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas ?
const alunosBolsistas = alunos.reduce(function(alunoAtual, alunoProximo) {
    let bolsistas = alunoAtual.bolsista && alunoProximo.bolsista
    return { bolsista: bolsistas }
}) 

console.log(alunosBolsistas.bolsista)

// Desafio 2: Algum aluno é bolsista ?
const algumAlunoBolsista = alunos.reduce(function(alunoAtual, alunoProximo) {
    let bolsistas = alunoAtual.bolsista || alunoProximo.bolsista
    return { bolsista: bolsistas }
})

console.log(algumAlunoBolsista.bolsista)