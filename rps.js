function getComputerChoice() {

    let rand = Math.floor((Math.random() * 3) + 1);
    switch (rand) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "";
    }
}

function getHumanChioce() {
    return(prompt("Enter a choice of rock, paper, or scissors: "));
}

console.log(`Computer choice: ${getComputerChoice()}`);
console.log(`Human choice: ${getHumanChioce()}`);