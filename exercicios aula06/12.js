// Objeto pessoa com propriedades existentes
const pessoa = {
    nome: "Bruce Banner",
    dataNascimento: "25/01/1980",
    carteiraIdentidade: "997776-X",
    email: "profbanner@email.com",
    telefone: "+552877776666",
    cidade: "Cachoeiro de Itapemirim",
    estado: "ES"
};

// Adicionando os campos seguroSocial e cpf
pessoa.seguroSocial = "123-45-6789"; // Exemplo de valor fictício
pessoa.cpf = "123.456.789-00"; // Exemplo de valor fictício

// Função para exibir o relatório com CPF e carteira de identidade truncados
function exibirRelatorio(pessoa) {
    const cpfTruncado = pessoa.cpf ? pessoa.cpf.slice(0, 4) : "Não informado";
    const carteiraIdentidadeTruncada = pessoa.carteiraIdentidade ? pessoa.carteiraIdentidade.slice(0, 4) : "Não informado";
    
    console.log("Nome:", pessoa.nome);
    console.log("Data de Nascimento:", pessoa.dataNascimento);
    console.log("Carteira de Identidade (4 primeiros dígitos):", carteiraIdentidadeTruncada);
    console.log("Email:", pessoa.email);
    console.log("Telefone:", pessoa.telefone);
    console.log("Cidade:", pessoa.cidade);
    console.log("Estado:", pessoa.estado);
    console.log("CPF (4 primeiros dígitos):", cpfTruncado);
    console.log("Seguro Social:", pessoa.seguroSocial);
}

// Exibindo o relatório com as informações da pessoa
exibirRelatorio(pessoa);