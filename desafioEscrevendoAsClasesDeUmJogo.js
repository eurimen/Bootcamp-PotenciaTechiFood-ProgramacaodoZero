class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let tipoAtaque = "";

        switch (this.tipo) {
            case "Mago":
                tipoAtaque = "Usou Magia";
                break;
            case "Guerreiro":
                tipoAtaque = "Usou Espada";
                break;
            case "Monge":
                tipoAtaque = "Usou Artes Marciais";
                break;
            case "Ninja":
                tipoAtaque = "Usou Shuriken";
                break;
            default:
                tipoAtaque = "Usou Um Ataque Genérico";
        }
        console.log(`${this.nome} ${tipoAtaque}`);
    }
}

const heroi1 = new Heroi("Goku", 500, "Guerreiro");
const heroi2 = new Heroi("Aladdin", 100, "Mago");
const heroi3 = new Heroi("Morgiana", 300, "Monge");
const heroi4 = new Heroi("Hashirama", 400, "Ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();