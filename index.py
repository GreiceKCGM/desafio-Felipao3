class Hero:
    def __init__(self, nome, idade, tipo):
        self.nome = nome
        self.idade = idade
        self.tipo = tipo

    def atacar(self):
        ataque = (
            "magia" if self.tipo == "maga"  else 
            "espada" if self.tipo == "guerreira" else
            "artes marciais" if self.tipo == "monja" else
            "shuriken" if self.tipo == "ninja" else
            "um ataque indefinido"

        )

        print(f"A {self.tipo} atacou usando {ataque}")


maga = Hero("Greice", 35, "maga")
guerreira = Hero("Alana", 35, "guerreira")
monja = Hero("Coen", 35, "monja")
ninja = Hero("Sakura", 35, "ninja")
soldada = Hero("Maria Quitéria", 35, "soldada")


maga.atacar()
guerreira.atacar()
monja.atacar()
ninja.atacar()
soldada.atacar()