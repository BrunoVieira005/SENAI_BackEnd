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
    
    // Método para exibir os detalhes do livro
    mostrardetalhes() {
        console.log(`Título: ${this.titulo}\nAutor: ${this.autor}\nAno de Publicação: ${this.anoPublicacao}\nGênero: ${this.genero}\nIdade: ${this.idadePublicacao}`)
    }
}

// Cria uma instância da classe Livro e exibe seus detalhes
let Livro1 = new Livro("A revolução dos bichos", "George Orwell", 2007, "Política/Literatura")
Livro1.mostrardetalhes()
