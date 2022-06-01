//Global variables

let playerScore = 0;
let computerScore = 0;
let rounds = 0;


//Selectors
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const choices = document.querySelector('.choices');
const round = document.querySelector('.round');
const totals = document.querySelector('.totals');

//Events
rock.addEventListener('click', pickRock);
paper.addEventListener('click', pickPaper);
scissors.addEventListener('click', pickScissors);


//Event Functions
function pickRock(e){
    let input = 'rock';
    game(input);
    round.innerHTML = `<h3>Round: ${rounds}</h3>`;
}

function pickPaper(e){
    let input = 'paper';
    game(input);
    round.innerHTML = `<h3>Round: ${rounds}</h3>`;
}

function pickScissors(e){
    let input = 'scissors';
    game(input);
    round.innerHTML = `<h3>Round: ${rounds}</h3>`;
}


//RPS Functions
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


function playRound(player) {
    let playerTurn = player;
    let computerTurn = computerPlay();
    let message = '';
    console.log("Computer: "+computerTurn)
    console.log("Player: "+playerTurn)
    switch (playerTurn) {
        case "rock":
            if (computerTurn === "scissors") {
                message = "You win! Rock beats scissors"
                
            } else if (computerTurn === "paper") {
                message = "You lose! Paper beats rock"
            } else {
                message = "Tie!"
            };
            break;
        case "paper":
            if (computerTurn === "scissors") {
                message = "You lose! Scissors beats paper"
            } else if (computerTurn === "rock") {
                message = "You win! Paper beats rock"
            } else {
                message = "Tie!"
            };
            break;
            
        case "scissors":
            if (computerTurn === "paper") {
                message = "You win! Scissors beats paper"
            } else if (computerTurn === "rock") {
                message = "You lose! Rock beats scissors"
            } else {
                message = "Tie!"
            };
            break;                          
    }
    console.log(message);
    choices.innerHTML = `<h3>Player choice: ${playerTurn}</h3><h3>Corgi choice: ${computerTurn}</h3><h3>${message}</h3>`;
    return message;
}



function game(input) {
    let player = input;
    if (rounds < 5) {
        let RPS_game = playRound(player);
        if (RPS_game.includes("You win") === true) {
            playerScore++;
            rounds++;
            totals.innerHTML = `<h3>Player score: ${playerScore}  Corgi score: ${computerScore}</h3>`;
        } else if (RPS_game.includes("You lose") === true) {
            computerScore++;
            rounds++;
            totals.innerHTML = `<h3>Player score: ${playerScore}  Corgi score: ${computerScore}</h3>`;
        } else if (RPS_game.includes("Tie") === true) {
            totals.innerHTML = `<h3>Player score: ${playerScore}  Corgi score: ${computerScore}</h3>`;
        }
    // }
    // if (playerScore > computerScore) {
    //     return "Final = "+"Player Score: "+playerScore+" Computer Score: "+computerScore+" , You Win!"
    // } else {
    //     return "Final = "+"Player Score: "+playerScore+" Computer Score: "+computerScore+" , You Lose!"
    // }
}
}