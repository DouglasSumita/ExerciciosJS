/* Desafio utilizando map
Baseando-se no array abaixo com o conteudo de strings JSON, retorne um array com apenas os preços de cada produto.

 [ '{"nome":"Borracha", "preco": 3.45}',
   '{"nome":"Caderno", "preco": 13.90}',
   '{"nome":"Kit de Lapis", "preco": 41.22}' 
   '{"nome":"Caneta", "preco": 7.50}' 
 ]

*/

const carrinho = [ 
    '{"nome":"Borracha", "preco": 3.45}',
    '{"nome":"Caderno", "preco": 13.90}',
    '{"nome":"Kit de Lapis", "preco": 41.22}',
    '{"nome":"Caneta", "preco": 7.50}' 
]

// Método 1
const pegaPrecoStringJSON = function(string) {
    return JSON.parse(string).preco
}

const precos = carrinho.map(pegaPrecoStringJSON)
console.log(precos)

// Método 2

const paraObjeto = jsonString => JSON.parse(jsonString)
const apenasAtributo = objeto => objeto.preco

const precos2 = carrinho.map(paraObjeto).map(apenasAtributo)