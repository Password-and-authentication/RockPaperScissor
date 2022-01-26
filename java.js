





const thing1 = "Rock",
    thing2 = "Paper",
    thing3 = "Scissors";
computerPlay();
function computerPlay() {
    let a = Math.random();
    if (a <= 0.33) {
        return thing1;
    } else if (a > 0.33 && a < 0.67) {
        return thing2;
    } else {
        return thing3;
    }
}

let playerScore = 0,
    computerScore = 0;

const playerSelection = ["Rock", "Paper", "Scissors"];
let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == thing2) {
        
        computerScore++;
        return "You lose! Rock loses to Paper";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == thing3) {
        
        playerScore++;
        return "You win! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == thing1) {
        playerScore++;
        return win = "You win! Paper beats Rock";
    } else if (playerSelection.toLowerCase() == "saper" && computerSelection == thing3) {
        computerScore++;
        return win = "You lose! Paper loses to Scissors";
    } else if (playerSelection.toLowerCase() == "sock" && computerSelection == thing1) {
        computerScore++;
        return win = "You lose! Rock loses Scissors";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == thing2) {
        playerScore++;
        return win = "You win! Scissors beats Paper!";
    } else {
        return "Draw!";
    }
}



function game() {
    let playerSelection = prompt("Rock, paper or scissors?");
    result = playRound(playerSelection, computerSelection);
    scoreboard = "User:" + " " + playerScore + " " + "Computer" + " " + computerScore;
    things = [result, scoreboard];
    
    return things;

}
