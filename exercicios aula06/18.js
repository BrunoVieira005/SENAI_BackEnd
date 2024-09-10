// Define o objeto contaBancaria com propriedades e métodos solicitados
const contaBancaria = {
    titular: "Maria Oliveira",
    saldo: 1000,

    // Método para depositar um valor na conta
    depositar: function(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`);
        } else {
            console.log("Erro: O valor do depósito deve ser positivo.");
        }
    },

    // Método para sacar um valor da conta
    sacar: function(valor) {
        if (valor > 0) {
            if (valor <= this.saldo) {
                this.saldo -= valor;
                console.log(`Saque de ${valor} realizado. Novo saldo: ${this.saldo}`);
            } else {
                console.log("Erro: Saldo insuficiente para o saque.");
            }
        } else {
            console.log("Erro: O valor do saque deve ser positivo.");
        }
    }
};

// Define o objeto cliente com uma referência à conta bancária
const cliente = {
    nome: "Carlos Silva",
    conta: contaBancaria
};

// Função para mostrar o saldo da conta do cliente
function mostrarSaldo(cliente) {
    console.log(`Nome do Cliente: ${cliente.nome}`);
    console.log(`Saldo da Conta: ${cliente.conta.saldo}`);
}

// Realiza operações de depósito e saque na conta bancária do cliente
cliente.conta.depositar(500);  // Depósito de 500
cliente.conta.sacar(200);     // Saque de 200
cliente.conta.sacar(1500);    // Tentativa de saque maior que o saldo

// Chama a função para exibir as informações atualizadas
mostrarSaldo(cliente);