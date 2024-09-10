class Cliente { 

    constructor(nome, profissao, saldo) { 
        this.nome = nome; 
        this.profissao = profissao; 
        this.saldo = saldo;
    } 

    pix(valor) { 
        if (valor <= this.saldo) { 
            this.saldo -= valor; 
            console.log(`Pix de R$${valor.toFixed(2)} realizado com sucesso.`); 
        } else { 
            console.log("Saldo insuficiente para realizar o Pix."); 
        }
    } 

    emprestimo(valor) { 
        this.saldo += valor; 
        console.log(`Empréstimo de R$${valor.toFixed(2)} realizado com sucesso.`); 

    } 

 

    saque(valor) { 
        if (valor <= this.saldo) { 
            this.saldo -= valor; 
            console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`); 
        } else { 
            console.log("Saldo insuficiente para realizar o saque."); 
        } 
    } 

    extrato() { 
        console.log(`Saldo atual: R$${this.saldo.toFixed(2)}`); 
    } 
} 

// Exemplo de uso: 


let cliente1 = new Cliente("João Silva", "Engenheiro", 1000.00); 


cliente1.pix(200); 

cliente1.emprestimo(500); 

cliente1.saque(300); 

cliente1.extrato(); 