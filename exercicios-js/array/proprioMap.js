// Desafio implementar o proprio map.

Array.prototype.meuMap = function(callback) {
    let novoArray = [] 

    for (let i = 0; i < this.length; i++) {
        novoArray.push(callback(this[i], i, this))
    }

    return novoArray
}

const valores = [1, 2, 3, 4]
const valoresDobro = valores.meuMap(valor => valor * 2)
console.log(valoresDobro)

/* 
    Explicação: 
    A função Map retorna um novo array referente a um array inicial após ter processado cada elemento através de uma função de callback.
    A função Map sempre retorna 3 parametros: Valor, Indice e Array original.
*/
