/* Filter
 Conceito: Retornar um novo array com os elementos resultante da condição do callback.
 Exemplo: [1,2,3].filter((valor => valor > 1) retorno [2, 3]
*/ 

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const produtosNaoFrageis = produtos.filter(function(p) {
    return !p.fragil
})

const produtoFragil = produto => produto.fragil
const produtoCaro = produto => produto.preco > 1000

const produtosFrageisECaros = produtos.filter(produtoFragil).filter(produtoCaro)

console.log(produtosNaoFrageis)
console.log(produtosFrageisECaros)