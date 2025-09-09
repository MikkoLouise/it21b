//Console Input
const readline=require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})

console.log("---------------------------");
console.log("Factorial Application");
console.log("1. Say Hello");
console.log("2. Factorial");
console.log("3. Exit Application");
console.log("---------------------------");

rl.question("Enter your choice (1-3): ", choice =>{
    console.log(choice);

    if (choice === "1"){
        console.log("Hello");
    } else if (choice === "2"){
        console.log("Factorial");
    } else if (choice === "3"){
        console.log("Exiting Application");
    } else {
        console.log("Invalid Choice. Please Try Again");
    }
    
})
