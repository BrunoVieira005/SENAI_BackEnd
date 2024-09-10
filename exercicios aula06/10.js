const anoAtual = new Date().getFullYear();

class Livro {
    constructor(titulo, autor, anoPublicacao, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
        this.idadePublicacao = anoAtual - anoPublicacao; // Calcula a idade da publicação
    }
}

const livro = new Livro("O Senhor dos Anéis: A Sociedade do Anel", "J.R.R. Tolkien", 1954, "Aventura");

// Adicionando a propriedade 'avaliacao'
livro.avaliacao = 5.0;

// Excluindo a propriedade 'avaliacao'
delete livro.avaliacao;

// Imprimindo os detalhes do livro
console.log("Título:", livro.titulo);
console.log("Autor:", livro.autor);
console.log("Ano de Publicação:", livro.anoPublicacao);
console.log("Gênero:", livro.genero);
console.log("Idade da Publicação:", livro.idadePublicacao);
console.log("Avaliação:", livro.avaliacao); // Esta linha deve exibir 'undefined'
