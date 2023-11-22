class Heroi{
    constructor(nome, idade, tipo)
    {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque;

        switch (this.tipo) {
            case 'mago':
              ataque = 'magia';
              break;
            case 'guerreiro':
              ataque = 'espada';
              break;
            case 'monge':
              ataque = ' artes marciais';
              break;
            case 'ninja':
              ataque = 'shuriken';
              break;
            default:
              ataque = 'um ataque indefinido';
          } 
    

   console.log(`O ${this.tipo} atacou usando ${ataque}`);

    }
}



const mago  = new Heroi("Greice", 35, "mago")
const guerreiro = new Heroi("Greice", 35, "guerreiro")
const monge  = new Heroi("Greice", 35, "monge")
const ninja  = new Heroi("Greice", 35, "ninja")
const soldado = new Heroi("Greice", 35, "soldado")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()
soldado.atacar()



