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



function round(playerSelection, computerSelection) {
    if (playerSelection = "Rock" && computerSelection = "Paper") {
        alert("You lose! Rock loses to Paper");
    } else if (playerSelection = "Rock" && computerSelection = "Scissors") {
        alert("You win! Rock beats Scissors");
    } else if (playerSelection = "Paper" && computerSelection = "Rock") {
        alert("You win! Paper beats Rock");
    } else if (playerSelection = "Paper" && computerSelection = "Scissors") {
        alert("You lose! Paper loses to Scissors");
    } else if (playerSelection = "Scissors" && computerSelection = "Rock") {
        alert("You lose! Rock loses Scissors");
    } else if (playerSelection = "Scissors" && computerSelection = "Paper") {
        alert("You win! Scissors beats Paper!");
    } else {
        return "Draw";
    }
    

}


function test() {
    alert("o");
}
    










