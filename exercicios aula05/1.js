// Definindo a classe Carro 
class Carro { 
    // O método constructor é chamado quando uma nova instância da classe é criada 
    constructor(marca, modelo, ano) { 
        this.marca = marca;  // Atributo marca do carro 
        this.modelo = modelo;  // Atributo modelo do carro 
        this.ano = ano;  // Atributo ano do carro 
        this.motor_ligado = false;  // Atributo motor_ligado, inicialmente desligado 

    } 

    // Método para ligar o motor do carro 
    ligar_motor() { 
        this.motor_ligado = true;  // Atualiza o atributo motor_ligado para True 
    } 

    // Método para desligar o motor do carro 
    desligar_motor() { 
        this.motor_ligado = false;  // Atualiza o atributo motor_ligado para False 
    } 

  

    // Método para verificar o status do motor 
    status_motor() { 

        if (this.motor_ligado) { 
            return "O motor está ligado."; 
        } else { 
            return "O motor está desligado."; 
        } 
    }
} 

// Testando a classe Carro 

// Criar uma instância da classe Carro 
const meuCarro = new Carro("Ford", "Fiesta", 2022); 

// Verificar o status inicial do motor 
console.log(meuCarro.status_motor());  // Saída esperada: "O motor está desligado." 

// Ligar o motor do carro 
meuCarro.ligar_motor(); 
console.log(meuCarro.status_motor());  // Saída esperada: "O motor está ligado." 

// Desligar o motor do carro 
meuCarro.desligar_motor(); 
console.log(meuCarro.status_motor());  // Saída esperada: "O motor está desligado." 