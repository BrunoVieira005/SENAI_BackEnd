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
const Livro1 = new Livro("O Senhor dos Anéis", "J.R.R", 1954, "Ação")

// Exibe os detalhes do livro
console.log(`Título: ${Livro1.titulo}\nAutor: ${Livro1.autor}\nAno de Publicação: ${Livro1.anoPublicacao}\nGênero: ${Livro1.genero}\nIdade: ${Livro1.idadePublicacao}`)

// Corrige o gênero do livro
Livro1.genero = "Aventura"

// Exibe os detalhes do livro após a correção do gênero
console.log(`\nGÊNERO CORRIGIDO:\nTítulo: ${Livro1.titulo}\nAutor: ${Livro1.autor}\nAno de Publicação: ${Livro1.anoPublicacao}\nGênero: ${Livro1.genero}\nIdade: ${Livro1.idadePublicacao}`)