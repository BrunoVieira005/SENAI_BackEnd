// infoPessoa.js

// Define o objeto pessoa com as propriedades solicitadas
const pessoa = {
    nome: "João da Silva",
    idade: 30,
    solteiro: true,
    hobbies: ["leitura", "natação", "viagens"]
};

// Função para mostrar informações sobre a pessoa
function mostrarInfoPessoa(pessoa) {
    console.log("Nome:", pessoa.nome, "| Tipo:", typeof pessoa.nome);
    console.log("Idade:", pessoa.idade, "| Tipo:", typeof pessoa.idade);
    console.log("Solteiro:", pessoa.solteiro, "| Tipo:", typeof pessoa.solteiro);
    console.log("Hobbies:", pessoa.hobbies.join(", "), "| Tipo:", typeof pessoa.hobbies);
}

// Chama a função para mostrar as informações da pessoa
mostrarInfoPessoa(pessoa);