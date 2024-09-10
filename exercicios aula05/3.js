class Automovel {
    constructor(cor, modelo, combustivel, qtd_rodas) {
        this.cor = cor;
        this.modelo = modelo;
        this.combustivel = combustivel;
        this.qtd_rodas = qtd_rodas;
    }
}

class Carro extends Automovel {
    constructor(cor, modelo, combustivel, qtd_rodas) {
        super(cor, modelo, combustivel, qtd_rodas);
        this.ligado = false;
        this.vidroAberto = false;
    }

    ligar() {
        this.ligado = true;
        console.log(`${this.modelo} está ligado`);
    }

    desligar() {
        this.ligado = false;
        console.log(`${this.modelo} está desligado`);
    }

    abrirVidro() {
        this.vidroAberto = true;
        console.log(`${this.modelo} está com o vidro aberto`);
    }

    subirVidro() {
        this.vidroAberto = false;
        console.log(`${this.modelo} não está com o vidro aberto`);
    }
}

class Moto extends Automovel {
    constructor(cor, modelo, combustivel, qtd_rodas) {
        super(cor, modelo, combustivel, qtd_rodas);
        this.ligado = false;
        this.vidroAberto = false; // Note que, para motos, geralmente não há vidro
    }

    ligar() {
        this.ligado = true;
        console.log(`${this.modelo} está ligado`);
    }

    desligar() {
        this.ligado = false;
        console.log(`${this.modelo} está desligado`);
    }
}

class Caminhao extends Automovel {
    constructor(cor, modelo, combustivel, qtd_rodas) {
        super(cor, modelo, combustivel, qtd_rodas);
        this.ligado = false;
        // Caminhões geralmente não têm vidro que pode ser aberto ou fechado
    }

    ligar() {
        this.ligado = true;
        console.log(`${this.modelo} está ligado`);
    }

    desligar() {
        this.ligado = false;
        console.log(`${this.modelo} está desligado`);
    }
}
