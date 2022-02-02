





const thing1 = "Rock",
    thing2 = "Paper",
    thing3 = "Scissors";

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
let aftermath;
let playerScore = 0,
    computerScore = 0;

const playerSelection = ["Rock", "Paper", "Scissors"];
let computerSelection = computerPlay();
let scores = playerScore + computerScore;

function playRound(playerSelection, computerSelection) {

    
    
    computerSelection = computerPlay();
    if (playerSelection.toLowerCase() == "rock" && computerSelection == thing2) {
        
        computerScore++;
        return aftermath = "You lose! Rock loses to Paper";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == thing3) {

        playerScore++;
        
        return aftermath = "You win! Rock beats Scissors";
        
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == thing1) {
        playerScore++;
        return aftermath = "You win! Paper beats Rock";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == thing3) {
        computerScore++;
        return aftermath = "You lose! Paper loses to Scissors";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == thing1) {
        computerScore++;
        return aftermath = "You lose! Rock loses Scissors";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == thing2) {
        playerScore++;
        return aftermath = "You win! Scissors beats Paper!";
    } else {
        return aftermath = "Tie!";
    }
    
}




function game() {
    let playerSelection = prompt("Rock, paper or scissors?");
    computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);
    scoreboard = "User:" + " " + playerScore + " " + "Computer" + " " + computerScore;
    console.log(scoreboard);
    if (playerScore == 5 ) {
        return result + " " + "You have won the game!";
    } else if (computerScore == 5) {
        return result + " " + "You have lost the game.";
    }
    return result;
}

const container = document.querySelector(".container");

const buttons = document.createElement("div");
buttons.classList.add("buttons");
buttons.setAttribute("style", "background-color: pink; width: max-content; margin: auto; padding: 20px; border: 4px solid black; border-radius: 5px")
buttons.style.display = "flex";


container.appendChild(buttons);

const button1 = document.createElement("button");
button1.classList.add("button1");
button1.textContent = "Rock";


const button2 = document.createElement("button");
button2.classList.add("button2");
button2.textContent = "Paper";


const button3 = document.createElement("button");
button3.classList.add("button3");
button3.textContent = "Scissors";

let playerWin = "Congrats, you win!";
let computerWin = "Your fucking dogshit";

function isFive() {
    
    if (playerScore >= 5 || computerScore >= 5) {
        results.textContent = playerWin;
    } else if (computerScore >= 5) {
        results.textContent = computerWin;
    } else {
        results.textContent = aftermath + " " + "User score:" + " " + playerScore + " " + "PC score" + " " + computerScore;
    }
}


buttons.appendChild(button1);
buttons.appendChild(button2);
buttons.appendChild(button3);

button2.addEventListener("click", () => {
    playRound("paper", computerSelection);
    isFive();
});

button1.addEventListener("click", () => {
    playRound("rock", computerSelection);
    isFive();

})


button3.addEventListener("click", () => {
    
    playRound("scissors", computerSelection);
    isFive();
    
})

const results = document.createElement("div");
results.classList.add("results");




results.setAttribute("style", "width: max-content; margin: auto; background-color: pink; padding: 50px; padding-left: 100px; padding-right: 100px; border: 2px solid black; margin-top: 30px")
container.appendChild(results);

const score = document.createElement("p");


results.appendChild(score);


























