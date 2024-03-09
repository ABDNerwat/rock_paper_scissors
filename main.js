let user_score = 0;
let pc_score = 0;
const m = new Map();
m.set(1, "Rock");
m.set(2, "Paper");
m.set(3, "Scissors");
function getComputerChoice(){
    return (Math.floor(Math.random() * 10))%3 + 1;
}

function game(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        document.getElementById("output").innerHTML = "Tie! Both chose " + playerSelection;
    }
    else if (playerSelection === "Rock"){
        if (computerSelection === "Scissors"){
            user_score++;
            document.getElementById("output").innerHTML = "You Win! Rock beats Scissors";
        }
        else{
            pc_score++;
            document.getElementById("output").innerHTML = "You Lose! Paper beats Rock";
        }
    }
    else if (playerSelection === "Paper"){
        if (computerSelection === "Rock"){
            user_score++;
            document.getElementById("output").innerHTML = "You Win! Paper beats Rock";
        }
        else{
            pc_score++;
            document.getElementById("output").innerHTML = "You Lose! Scissors beat Paper";
        }
    }
    else{
        if (computerSelection === "Paper"){
            user_score++;
            document.getElementById("output").innerHTML = "You Win! Scissors beat Paper";
        }
        else{   
            pc_score++;
            document.getElementById("output").innerHTML = "You Lose! Rock beats Scissors";
        }
    }
    if (user_score === 5){
        alert("VICTORY!!!\nWould you like to play again?");
        user_score = 0;
        pc_score = 0;
    }
    else if (pc_score === 5){
        alert("DEFEAT!\nWould you like to try again?");
        user_score = 0;
        pc_score = 0;
    }
    document.getElementById("userScore").innerHTML = user_score;
    document.getElementById("PCScore").innerHTML = pc_score;
}
document.getElementById("Rk").addEventListener("click", event =>{
    document.getElementById("output").innerHTML = getComputerChoice();
    game("Rock", m.get(getComputerChoice()));
})
document.getElementById("Pr").addEventListener("click", event =>{
    game("Paper", m.get(getComputerChoice()));
})
document.getElementById("Sr").addEventListener("click", event =>{
    game("Scissors", m.get(getComputerChoice()));
})
