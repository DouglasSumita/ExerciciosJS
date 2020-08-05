/*
As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
*/

const anos = [4, 12, 100, 200, 300, 500, 1004, 1008, 1012, 1016, 1020, 1900]

function isAnoBissexto(ano) {

    let anoBissexto = false
    
    if ((ano % 400) === 0) {
        anoBissexto = true
    } else if ((ano % 100) === 0) {
        anoBissexto = false
    } else if ((ano % 4) === 0) {
        anoBissexto = true
    }
    
    console.log('Ano', ano, anoBissexto ? '' : 'não', 'bissexto.') // Utilizando operador ternário.
    return anoBissexto
}

isAnoBissexto(2020)
anos.forEach(isAnoBissexto) // Utilizando forEach passando função de callback.
