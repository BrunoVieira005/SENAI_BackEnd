class Produto {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.tipoComunicacao = tipoComunicacao;
        this.consumoEnergia = consumoEnergia;
        this.ligado = false;
    }

    ligar() {
        this.ligado = true;
        console.log(`${this.nome} está ligado.`);
    }

    desligar() {
        this.ligado = false;
        console.log(`${this.nome} está desligado.`);
    }
}

class Fritadeira extends Produto {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
        this.temperatura = 0;
    }

    ajustarTemperatura(setpoint) {
        if (this.ligado) {
            this.temperatura = setpoint;
            console.log(`${this.nome} está ajustada para ${this.temperatura}°C.`);
        } else {
            console.log(`${this.nome} precisa estar ligada para ajustar a temperatura.`);
        }
    }
}

class Televisao extends Produto {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
        this.canal = 1; 
        this.volume = 10; 
    }

    ajustarTemperatura(setpoint) {
        console.log(`${this.nome} não tem ajuste de temperatura.`);
    }
}

class ArCondicionado extends Produto {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
        this.temperatura = 24; 
    }

    ajustarTemperatura(setpoint) {
        if (this.ligado) {
            this.temperatura = setpoint;
            console.log(`${this.nome} está ajustado para ${this.temperatura}°C.`);
        } else {
            console.log(`${this.nome} precisa estar ligado para ajustar a temperatura.`);
        }
    }
}

const minhaFritadeira = new Fritadeira('Fritadeira Elétrica', 10, 150, 'Sem fio', 1200);
const minhaTelevisao = new Televisao('TV LED', 5, 1200, 'HDMI', 150);
const meuArCondicionado = new ArCondicionado('Ar Condicionado Split', 2, 2000, 'Wi-Fi', 1500);

minhaFritadeira.ligar();
minhaFritadeira.ajustarTemperatura(180);

minhaTelevisao.ligar(); 
minhaTelevisao.ajustarTemperatura(22);

meuArCondicionado.ligar();
meuArCondicionado.ajustarTemperatura(18);
