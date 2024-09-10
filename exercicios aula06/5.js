// Define a classe Livro com um construtor para inicializar os atributos
class Livro {
    constructor(titulo, autor, anoPublicacao, genero) {
       this.titulo = titulo
       this.autor = autor
       this.anoPublicacao = anoPublicacao
       this.genero = genero
    }
}

// Cria uma instância da classe Livro
let Livro1 = new Livro("O último Ronin", "Kevin Eastman", "2023", "Ação")

// Exibe os detalhes do livro
console.log(`Título: ${Livro1.titulo}\n Autor: ${Livro1.autor}\n Ano de publicação: ${Livro1.anoPublicacao}\n Gênero: ${Livro1.genero}`)
