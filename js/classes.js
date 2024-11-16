class Character { //Classe que define propridades pertencentes a todos os personagens
    
    #life = 1;      //Propriedade privada
    maxLife = 1;    //Caracteristicas fixas
    attack = 0;
    defense = 0;
    
    constructor(name){    
        this.name = name
    }

    get life(){ //Acessando propriedade privada por meio de metodo publico; Encapsulamento.
        return this.#life;
    }

    set life(newlife){ //Não permite que a vida fique abaixo de 0;
        this.#life = newlife < 0 ? 0 : newlife;
    }


}

//Classes que define o tipo de personagem

class Kinght extends Character {
    constructor(name){
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class Sorcerer extends Character {
    constructor(name){
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
    }
}


class LitteMonster extends Character {
    constructor(){
        super('Litte Monster');
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

class BigMonster extends Character {
    constructor(){
        super('Big Monster')
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;
    }
}

//Classes Cenario

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
    }
}

start(){
    this.update()
}
