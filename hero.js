class Hero{
    #health

    constructor(name,health,attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;
    }

    getName(){
        return this.name;
    }

    getHealth(){
           return this.#health;
    }

    showStats(){
        console.log("Name: "+this.name);
        console.log("Health: "+this.#health);
        console.log("Attack: "+this.attack);
        console.log("------------------------");
    } 
}

class Warrior extends Hero {
    useAbility(){
        console.log(`${this.name} used Power Strike`);
    }
}

const Naruto = new Warrior("Naruto", 100 , 10);
const hero2 = new Hero("Sasuke", 100 , 8);


Naruto.useAbility();