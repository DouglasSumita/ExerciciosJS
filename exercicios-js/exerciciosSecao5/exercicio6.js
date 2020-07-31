/*
6) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. 
*/

function retornoMensalAplicacao(capital, taxaJuros) {
   return capital * taxaJuros
}

function aplicacaoJurosSimples(capital = 0, taxaJuros = 0, tempoAplicacao = 0) {
    let capitalInicial = capital
    for (let i = 0; i < tempoAplicacao; i++) {
        capital += retornoMensalAplicacao(capitalInicial, taxaJuros)
    }
    return capital
}
aplicacaoJurosSimples(100, 0.10, 2)

function aplicacaoJurosComposto(capital = 0, taxaJuros = 0, tempoAplicacao = 0) {
    for (let i = 0; i < tempoAplicacao; i++) {
        capital += retornoMensalAplicacao(capital, taxaJuros)
    }
    return capital
}
 
console.log(aplicacaoJurosSimples(100, 0.10, 12))
console.log(aplicacaoJurosComposto(100, 0.10, 9))
