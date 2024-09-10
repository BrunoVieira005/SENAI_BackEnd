// Obtém o ano atual
const anoAtual = new Date().getFullYear()

// Define a classe Livro com um construtor que calcula a idade da publicação
class Livro {
    constructor(titulo, autor, anoPublicacao, genero) {
       this.titulo = titulo
       this.autor = autor
       this.anoPublicacao = anoPublicacao
       this.genero = genero
       this.idadePublicacao = anoAtual - anoPublicacao
    }
}

// Cria uma instância da classe Livro
const Livro1 = new Livro("O último Ronin", "Kevin Eastman", "2023", "Ação")

// Exibe os detalhes do livro usando a notação de colchetes
console.log("Título:", Livro1["titulo"])
console.log("Autor:", Livro1["autor"])
console.log("Ano de Publicação:", Livro1["anoPublicacao"])
console.log("Gênero:", Livro1["genero"])
console.log("Idade da Publicação:", Livro1["idadePublicacao"])