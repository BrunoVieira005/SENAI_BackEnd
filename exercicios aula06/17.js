// Define o objeto calculadora com os métodos solicitados
const calculadora = {
    // Método para somar dois números
    soma: function(a, b) {
        return a + b;
    },

    // Método para subtrair o segundo número do primeiro
    subtracao: function(a, b) {
        return a - b;
    },

    // Método para multiplicar dois números
    multiplicacao: function(a, b) {
        return a * b;
    },

    // Método para dividir o primeiro número pelo segundo
    divisao: function(a, b) {
        if (b === 0) {
            return "Erro: Divisão por zero não é permitida.";
        }
        return a / b;
    },

    // Novo método para calcular a média de um array de números
    calcularMedia: function(numeros) {
        if (numeros.length === 0) {
            return "Erro: O array está vazio.";
        }
        const soma = numeros.reduce((acc, num) => acc + num, 0);
        return soma / numeros.length;
    }
};

// Chama cada função dentro do objeto calculadora e imprime os resultados no console
console.log("Soma:", calculadora.soma(10, 5)); // Exemplo: 10 + 5 = 15
console.log("Subtração:", calculadora.subtracao(10, 5)); // Exemplo: 10 - 5 = 5
console.log("Multiplicação:", calculadora.multiplicacao(10, 5)); // Exemplo: 10 * 5 = 50
console.log("Divisão:", calculadora.divisao(10, 5)); // Exemplo: 10 / 5 = 2
console.log("Divisão por zero:", calculadora.divisao(10, 0)); // Exemplo: Divisão por zero

// Chama a função calcularMedia passando um array de números e imprime o resultado
const numeros = [10, 20, 30, 40, 50];
console.log("Média:", calculadora.calcularMedia(numeros)); // Exemplo: (10 + 20 + 30 + 40 + 50) / 5 = 30