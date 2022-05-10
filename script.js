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
    console.log("Comp: "+computerTurn)
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
console.log(playRound())