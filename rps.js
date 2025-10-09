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

let text = document.getElementById('result');
function setText(string) {
    text.textContent = string;
}

function playRound(humanChoice = "") {
    let computerChoice = getComputerChoice();
    let combined = (humanChoice.toLowerCase() + computerChoice.toLowerCase());
    let result = "stalemate";
    switch (combined) {
        case "rockrock":
            setText("Stalemate! You both played Rock.");
            break;
        case "rockpaper":
            setText("You lose! Paper beats Rock.");
            result = "lose";
            break;
        case "rockscissors":
            setText("You win! Rock beats Scissors.");
            result = "win";
            break;
        case "paperrock":
            setText("You win! Paper beats Rock.");
            result = "win";
            break;
        case "paperpaper":
            setText("Stalemate! You both played Paper.");
            break;
        case "paperscissors":
            setText("You lose! Scissors beats Paper.");
            result = "lose";
            break;
        case "scissorsrock":
            setText("You lose! Rock beats Scissors.");
            result = "lose";
            break;
        case "scissorspaper":
            setText("You win! Scissors beats Paper.");
            result = "win";
            break;
        case "scissorsscissors":
            setText("Stalemate! Yout both played Scissors.");
            break;
        default:
            break;
    }

    return result;
}

let buttons = document.getElementById('choices');
let score = document.getElementById('score');

let humanScore = 0;
let computerScore = 0;

buttons.addEventListener('click', (e) => {
    let result = playRound(e.target.id);
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

    score.innerText = "Score: " + humanScore;
});

//playGame();