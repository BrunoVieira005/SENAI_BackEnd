// Define a classe PessoaEstudante para representar uma pessoa estudante
class PessoaEstudante {
    constructor(nome, matricula, curso, materias) {
        this.nome = nome;             // Nome completo da pessoa estudante
        this.matricula = matricula;   // Número da matrícula
        this.curso = curso;           // Curso atual da pessoa estudante
        this.materias = new Set(materias); // Conjunto de matérias que a pessoa estudante está cursando
    }
    
    // Método para adicionar uma nova matéria ao conjunto de matérias
    adicionarMateria(materia) {
        this.materias.add(materia);
    }
    
    // Método para remover uma matéria do conjunto de matérias
    removerMateria(materia) {
        this.materias.delete(materia);
    }
    
    // Método para exibir as informações da pessoa estudante
    exibirInformacoes() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Curso: ${this.curso}`);
        console.log(`Matérias: ${Array.from(this.materias).join(', ')}`);
    }
}

// Exemplo de uso da classe PessoaEstudante
const estudante1 = new PessoaEstudante(
    "Ana Silva",
    123456,
    "Engenharia de Software",
    ["Matemática", "Programação"]
);

// Adiciona uma nova matéria
estudante1.adicionarMateria("Algoritmos");

// Remove uma matéria existente
estudante1.removerMateria("Matemática");

// Exibe as informações do estudante
estudante1.exibirInformacoes();