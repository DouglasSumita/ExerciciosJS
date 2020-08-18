const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const funcionarioChineses = funcionario => funcionario.pais === 'China'
const funcionariaMulher = funcionario => funcionario.genero = 'F'

const funcionarioMenorSalario = (funcionarioMenorSalario, funcionarioAtual) => {
    if (funcionarioMenorSalario.salario > funcionarioAtual.salario) {
        return funcionarioAtual
    } else {
        return funcionarioMenorSalario
    }
}

axios.get(url).then((res) => {
    const funcionarios = res.data
    const funcionariaChinesaMenorSalario = funcionarios.filter(funcionarioChineses).filter(funcionariaMulher).reduce(funcionarioMenorSalario)
    console.log(funcionariaChinesaMenorSalario)
})
