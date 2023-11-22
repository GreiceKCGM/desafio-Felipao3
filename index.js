class Heroi{
    constructor(nome, idade, tipo)
    {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        const ataque =
            this.tipo === "mago" ? "magia" :
            this.tipo === "guerreira"? "espada" :
            this.tipo === "monja"? " artes marciais" :
            this.tipo === "ninja"? "shuriken" :
            "um ataque indefinido";

        /*switch (this.tipo) {
            case 'maga':
              ataque = 'magia';
              break;
            case 'guerreira':
              ataque = 'espada';
              break;
            case 'monja':
              ataque = ' artes marciais';
              break;
            case 'ninja':
              ataque = 'shuriken';
              break;
            default:
              ataque = 'um ataque indefinido';
          } */
    

   console.log(`A ${this.tipo} atacou usando ${ataque}`);

    }
}



const maga  = new Heroi("Greice", 35, "maga")
const guerreira = new Heroi("Alana", 35, "guerreira")
const monja  = new Heroi("Coen", 35, "monja")
const ninja  = new Heroi("Sakura ", 35, "ninja")
const soldada = new Heroi("Maria Quitéria", 35, "soldada")

maga.atacar()
guerreira.atacar()
monja.atacar()
ninja.atacar()
soldada.atacar()



