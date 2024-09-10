// Obtém o ano atual
const anoAtual = new Date().getFullYear()

// Define a classe Livro com um construtor que calcula a idade da publicação e inicializa a avaliação como null
class Livro {
    constructor(titulo, autor, anoPublicacao, genero) {
       this.titulo = titulo
       this.autor = autor
       this.anoPublicacao = anoPublicacao
       this.genero = genero
       this.idadePublicacao = anoAtual - anoPublicacao
       this.avaliacao = null
    }
}

// Cria uma instância da classe Livro
const Livro1 = new Livro("O último Ronin", "Kevin Eastman", 2023, "Ação")

// Função para atribuir uma avaliação ao livro
function atribuirAvaliacao(livro, novaAvaliacao) {
    // Verifica se a avaliação do livro é null
    if (livro.avaliacao === null) {
        livro.avaliacao = novaAvaliacao
        console.log(`Avaliação adicionada: ${livro.avaliacao}`)
    } else {
        console.log("O livro já possui avaliação.")
    }
}

// Atribui uma avaliação ao livro
atribuirAvaliacao(Livro1, 4.5)

// Exibe os detalhes do livro, incluindo a avaliação
console.log("Título:", Livro1.titulo)
console.log("Autor:", Livro1.autor)
console.log("Ano de Publicação:", Livro1.anoPublicacao)
console.log("Gênero:", Livro1.genero)
console.log("Idade da Publicação:", Livro1.idadePublicacao)
console.log("Avaliação: ", Livro1.avaliacao)