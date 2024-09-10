// Cria um array vazio para armazenar tipos de animais
clinica = []

// Adiciona os tipos de animais ao array
clinica.push('cachorro', 'gato', 'hamster')

// Exibe o array inicial
console.log(clinica)

// Obtém o tamanho do array
tamanho = clinica.length

// Itera sobre o array, removendo o primeiro elemento a cada iteração
var i;
for (i = 0; i < tamanho; i++) {
    clinica.shift() // Remove o primeiro elemento do array
    // Exibe o array após a remoção do primeiro elemento
    console.log(clinica)
}