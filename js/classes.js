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
    constructor(fighter1, fighter2, fighter1El, fighter2El,logObject){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log = logObject;
    }

    start(){
        this.update();

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1,this.fighter2));
        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2,this.fighter1));
    }

    update(){
        this.fighter1El.querySelector('.name').innerHTML = ` ${this.fighter1.name} - ${this.fighter1.life.toFixed(1)}HP `;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;

        this.fighter2El.querySelector('.name').innerHTML = ` ${this.fighter2.name} - ${this.fighter2.life.toFixed(1)}HP `;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;
    }

    doAttack(attackin, attacked){
        if(attackin.life <= 0 || attacked.life <=0){
            this.log.addMessage('Atacando cachorro morto');
            return
        }

        let attackFactor = (Math.random()* 2).toFixed(2);
        let defenseFactor = (Math.random()* 2).toFixed(2);

        let actualDefense = attacked.defense * defenseFactor;
        let actualAttack =  attackin.attack * attackFactor;

        if (actualAttack > actualDefense){
            attacked.life -= actualAttack;
            this.log.addMessage(`${attackin.name} causou ${actualAttack.toFixed(1)} de dano em ${attacked.name}`);
        }else{
            this.log.addMessage(`${attacked.name} conseguiu se defender`)
        }
        this.update()
    }
}

class Log {
    list = [];

    constructor(listEl){
        this.listEl = listEl;
    }

    addMessage(msg){
        this.list.push(msg);
        this.render();
    }

    render(){
        this.listEl.innerHTML = "";

        for(let i in this.list){
            this.listEl.innerHTML += `<li>${this.list[i]}</li>` ;
        }
    }
}
