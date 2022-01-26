
let playerScore;
let computerScore;





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


const playerSelection = ["Rock", "Paper", "Scissors"];
let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == thing2) {
        return "You lose! Rock loses to Paper";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == thing3) {
        return "You win! Rock beats Scissors";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == thing1) {
        return win = "You win! Paper beats Rock";
    } else if (playerSelection.toLowerCase() == "saper" && computerSelection == thing3) {
        return win = "You lose! Paper loses to Scissors";
    } else if (playerSelection.toLowerCase() == "sock" && computerSelection == thing1) {
        return win = "You lose! Rock loses Scissors";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == thing2) {
        return win = "You win! Scissors beats Paper!";
    } else {
        return "Draw!";
    }
}



function game() {
    let playerSelection = prompt("Rock, paper or scissors?");
    return playRound(playerSelection, computerSelection);  

}
    












    










