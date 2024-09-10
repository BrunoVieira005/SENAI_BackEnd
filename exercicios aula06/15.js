// infoPessoa.js

// Define o objeto pessoa com as propriedades solicitadas e a nova propriedade endereco
const pessoa = {
    nome: "João da Silva",
    idade: 30,
    solteiro: true,
    hobbies: ["leitura", "natação", "viagens"],
    endereco: {
        rua: "Rua das Flores",
        cidade: "São Paulo",
        estado: "SP"
    }
};

// Função para mostrar informações sobre a pessoa
function mostrarInfoPessoa(pessoa) {
    console.log("Nome:", pessoa.nome, "| Tipo:", typeof pessoa.nome);
    console.log("Idade:", pessoa.idade, "| Tipo:", typeof pessoa.idade);
    console.log("Solteiro:", pessoa.solteiro, "| Tipo:", typeof pessoa.solteiro);
    console.log("Hobbies:", pessoa.hobbies.join(", "), "| Tipo:", typeof pessoa.hobbies);
    console.log("Endereço:");
    console.log("  Rua:", pessoa.endereco.rua, "| Tipo:", typeof pessoa.endereco.rua);
    console.log("  Cidade:", pessoa.endereco.cidade, "| Tipo:", typeof pessoa.endereco.cidade);
    console.log("  Estado:", pessoa.endereco.estado, "| Tipo:", typeof pessoa.endereco.estado);
}

// Chama a função para mostrar as informações da pessoa
mostrarInfoPessoa(pessoa);