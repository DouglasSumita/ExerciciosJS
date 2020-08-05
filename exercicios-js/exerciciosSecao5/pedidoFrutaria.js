/*
Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.
*/

function pedidoFrutaria(fruta) {
    
    let mensagem = ''

    switch (fruta) {
        case 'maçã':
            mensagem = 'Não vendemos esta fruta aqui'
            break
        case 'kiwi':
            mensagem = 'Estamos com escassez de kiwis'
            break
        case 'melancia':
            mensagem = 'Aqui está, são 3 reais o quilo'
            break
        default:
            mensagem = 'Erro no console'    
    }

    console.log(mensagem)
}

pedidoFrutaria('maçã')
pedidoFrutaria('kiwi')
pedidoFrutaria('melancia')
pedidoFrutaria('')