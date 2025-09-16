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

class Mage extends Hero {
    constructor(name,health,attack,mana){
        super(name,health,attack);
        this.mana = mana;
    }

useAbility(){
    console.log(`${this.name} casts fireball`);
}

showStats(){
    super.showStats();
     console.log("Mana: "+this.mana);
}

}

const Naruto = new Warrior("Naruto", 100 , 10);
const Sasuke = new Mage("Sasuke", 100 , 8 , 50);

//Naruto.showStats();
//Naruto.useAbility();
Sasuke.showStats();
Sasuke.useAbility();