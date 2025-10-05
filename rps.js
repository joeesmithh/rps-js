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

function playRound(humanChoice = "", computerChioce = "") {
    let combined = (humanChoice.toLowerCase() + computerChioce.toLowerCase());
    let result = "stalemate";
    switch (combined) {
        case "rockrock":
            console.log("Stalemate! You both played Rock.");
            break;
        case "rockpaper":
            console.log("You lose! Paper beats Rock.");
            result = "lose";
            break;
        case "rockscissors":
            console.log("You win! Rock beats Scissors.");
            result = "win";
            break;
        case "paperrock":
            console.log("You win! Paper beats Rock.");
            result = "win";
            break;
        case "paperpaper":
            console.log("Stalemate! You both played Paper.");
            break;
        case "paperscissors":
            console.log("You lose! Scissors beats Paper.");
            result = "lose";
            break;
        case "scissorsrock":
            console.log("You lose! Rock beats Scissors.");
            result = "lose";
            break;
        case "scissorspaper":
            console.log("You win! Scissors beats Paper.");
            result = "win";
            break;
        case "scissorsscissors":
            console.log("Stalemate! Yout both played Scissors.");
            break;
        default:
            break;
    }

    return result;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChioce();
        let computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);
        switch (result) {
            case "win":
                humanScore++;
                break;
            case "lose":
                computerScore++;
                break;
            default:
                break;
        }
    }
}

playGame();