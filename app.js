class Person {
    name;
    age;
    occupation;
    message;

    constructor(name, age, occupation, message){
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.message = message;
    }

    displayInfo(){
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
        console.log("Message: " + this.message);
        console.log("-----------------------");

}
showName(){
    console.log(this.name);
}

showMessage(){
    console.log(this.message);
}
}
const person1 = new Person("Coco Martin" , 30, "Web Developer", "Ser, I love coding!");
const person2 = new Person("Victor Magtanggol" , 30, "Superman", "Darnaa!!!");

person1.displayInfo();
person2.displayInfo();

