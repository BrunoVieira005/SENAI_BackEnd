class Livro {
    constructor(nome, quantidade, preco, autor, numeroEdicao) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.autor = autor;
        this.numeroEdicao = numeroEdicao;
    }

    emprestar() {
        if (this.quantidade > 0) {
            this.quantidade--;
            console.log(`O livro "${this.nome}" foi emprestado. Quantidade disponível: ${this.quantidade}.`);
        } else {
            console.log(`O livro "${this.nome}" não está disponível para empréstimo.`);
        }
    }

    devolver() {
        this.quantidade++;
        console.log(`O livro "${this.nome}" foi devolvido. Quantidade disponível: ${this.quantidade}.`);
    }
}

// Exemplo de uso
const livro1 = new Livro('O Alquimista', 5, 29.90, 'Paulo Coelho', 10);

livro1.emprestar();  // O livro "O Alquimista" foi emprestado. Quantidade disponível: 4.
livro1.emprestar();  // O livro "O Alquimista" foi emprestado. Quantidade disponível: 3.
livro1.devolver();   // O livro "O Alquimista" foi devolvido. Quantidade disponível: 4.
livro1.devolver();   // O livro "O Alquimista" foi devolvido. Quantidade disponível: 5.

