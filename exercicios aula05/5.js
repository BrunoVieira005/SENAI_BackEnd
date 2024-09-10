class Maquina {
    constructor(nome, quantidadeEixos, rotacoesPorMinuto, consumoEnergia) {
        this.nome = nome;
        this.quantidadeEixos = quantidadeEixos;
        this.rotacoesPorMinuto = rotacoesPorMinuto;
        this.consumoEnergia = consumoEnergia;
        this.ligada = false;
    }

    ligar() {
        this.ligada = true;
        console.log(`${this.nome} está ligada.`);
    }

    desligar() {
        this.ligada = false;
        console.log(`${this.nome} está desligada.`);
    }

    ajustarVelocidade(novaRotacao) {
        if (this.ligada) {
            this.rotacoesPorMinuto = novaRotacao;
            console.log(`${this.nome} está ajustada para ${this.rotacoesPorMinuto} rotações por minuto.`);
        } else {
            console.log(`${this.nome} precisa estar ligada para ajustar a velocidade.`);
        }
    }
}

class Furadeira extends Maquina {
    constructor(nome, rotacoesPorMinuto, consumoEnergia) {
        super(nome, 0, rotacoesPorMinuto, consumoEnergia); // A quantidade de eixos para Furadeira é 0 por padrão
    }
}

// Exemplo de uso
const minhaFuradeira = new Furadeira('Furadeira Elétrica', 1500, 800);
minhaFuradeira.ligar(); // Furadeira Elétrica está ligada.
minhaFuradeira.ajustarVelocidade(2000); // Furadeira Elétrica está ajustada para 2000 rotações por minuto.
minhaFuradeira.desligar(); // Furadeira Elétrica está desligada.
minhaFuradeira.ajustarVelocidade(2500); // Furadeira Elétrica precisa estar ligada para ajustar a velocidade.
