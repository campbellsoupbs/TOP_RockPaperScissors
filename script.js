function computerPlay() {
    let computerTurn = Math.floor(Math.random()*100)
    if (computerTurn < 33) {
        return "rock"
    } else if (computerTurn < 66 && computerTurn > 33) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound() {
    let playerTurn = prompt("Enter your choice: ");
    playerTurn = playerTurn.toLowerCase();
    let computerTurn = computerPlay();
    console.log("Computer: "+computerTurn)
    console.log("Player: "+playerTurn)
    switch (playerTurn) {
        case "rock":
            if (computerTurn === "scissors") {
                return "You win! Rock beats scissors"
            } else if (computerTurn === "paper") {
                return "You lose! Paper beats rock"
            } else {
                return "Tie!"
            };
            break;
        case "paper":
            if (computerTurn === "scissors") {
                return "You lose! Scissors beats paper"
            } else if (computerTurn === "rock") {
                return "You win! Paper beats rock"
            } else {
                return "Tie!"
            };
            break;
            
        case "scissors":
            if (computerTurn === "paper") {
                return "You win! Scissors beats paper"
            } else if (computerTurn === "rock") {
                return "You lose! Rock beats scissors"
            } else {
                return "Tie!"
            };
            break;                          
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let RPS_game = playRound();
        if (RPS_game.includes("You win") === true) {
            playerScore++;
        } else if (RPS_game.includes("You lose") === true) {
            computerScore++;
        } else if (RPS_game.includes("Tie") === true) {
            i--;
        }
    }
    return "Player Score: "+playerScore+" Computer Score: "+computerScore
}

console.log(game())