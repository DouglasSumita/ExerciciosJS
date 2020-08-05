/*
O cardápio de uma lanchonete é o seguinte:

Código  Descrição do Produto  Preço
100     Cachorro Quente       R$ 3,00
200     Hambúrguer Simples    R$ 4,00
300     Cheeseburguer         R$ 5,50
400     Bauru                 R$ 7,50
500     Refrigerante          R$ 3,50
600     Suco                  R$ 2,80

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

const {converteParaBRL} = require('./exercicio5') // Trazendo função ja criada em outro arquivo para ser utilizada nesse exercicio.

// Não era necessário criar uma classe para criar produtos, porém achei interessante o mesmo para fins didáticos.
class Produto {
    constructor(codigo, descricao, preco) {
        this.codigo = codigo
        this.descricao = descricao
        this.preco = preco
    }
}

function valorPedidoProduto(codigo, quantidade) {
    let produto, resultado 

    switch (codigo) {
        case 100:
            produto = new Produto(100, 'Cachorro Quente', 3.00)
            break
        case 200:
            produto = new Produto(200, 'Hambúrguer Simples', 4.00)
            break
        case 300:
            produto = new Produto(300, 'Cheeseburguer', 5.50)
            break
        case 400:
            produto = new Produto(400, 'Bauru', 7.50)
            break
        case 500:
            produto = new Produto(500, 'Refrigerante', 3.50)
            break
        case 600:
            produto = new Produto(600, 'Suco', 2.80)
            break 
        default:
            resultado = 'Produto inválido'                                  
    }

    if (produto) {
        resultado = converteParaBRL(produto.preco * quantidade)
    }

    return resultado
}

console.log(valorPedidoProduto(700, 3))
console.log(valorPedidoProduto(700, 0))
console.log(valorPedidoProduto(300, 1))
console.log(valorPedidoProduto(400, 10))

