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
    return (prompt("Enter a choice of rock, paper, or scissors: "));
}

let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice = "", computerChioce = "") {
    let combined = (humanChoice.toLowerCase() + computerChioce.toLowerCase());
    switch (combined) {
        case "rockrock":
            console.log("Stalemate! You both played Rock.")
            break;
        case "rockpaper":
            console.log("You lose! Paper beats Rock.")
            computerScore++;
            break;
        case "rockscissors":
            console.log("You win! Rock beats Scissors.")
            humanScore++
            break;
        case "paperrock":
            console.log("You win! Paper beats Rock.")
            humanScore++;
            break;
        case "paperpaper":
            console.log("Stalemate! You both played Paper.")
            break;
        case "paperscissors":
            console.log("You lose! Scissors beats Paper.")
            computerScore++;
            break;
        case "scissorsrock":
            console.log("You lose! Rock beats Scissors.")
            computerScore++;
            break;
        case "scissorspaper":
            console.log("You win! Scissors beats Paper.")
            humanScore++;
            break;
        case "scissorsscissors":
            console.log("Stalemate! Yout both played Scissors.")
            break;
        default:
            break;
    }
}

let humanSelection = getHumanChioce();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);