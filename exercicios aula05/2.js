class Pessoa {
    constructor(nome,idade,profissao, salario) {
    this.nome = nome
    this.idade = idade
    this.profissao = profissao
    this.salario = salario
    }


exibeTrabalho(nomeEmpresa, tempoTrabalho) {
    console.log(`Trabalho na empresa ${nomeEmpresa}, há ${tempoTrabalho}`)
}
}

const Eu = new Pessoa ("Bruno", "18", "Auxiliar Administrativo", "R$2.000");
Eu.exibeTrabalho("SC Eng.", "2 anos")

console.log(`Nome: ${Eu.nome}, Idade: ${Eu.idade}, Profissão: ${Eu.profissao}, Salário: ${Eu.salario}`)
