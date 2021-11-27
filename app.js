// A function that randomly returns either rock, paper or scissors
// Create a container (dictionary) to store the list of possible game choices
// Assign a unique number ID to rock, paper and scissors, 1 - 3
// Randomly generate a number
// Print the choice with the number ID that matches 


const choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    // convert user's input to lowercase (user input is case-insensitive bc conversion will take care of it)
    console.log(computerSelection);
    // transform user's input to desired format: "Rock", "Paper", "Scissors"
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    // if tie
    if (computerSelection == playerSelection) {
        return "It's a tie!";
    }

    // where computer wins
    else if (
        (computerSelection == "Rock" && playerSelection == "Scissors") ||
        (computerSelection == "Scsissors" && playerSelection == "Paper") ||
        (computerSelection == "Paper" && playerSelection == "Rock")) 
    {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }

    // where player wins
    else (
        (computerSelection == "Rock" && playerSelection == "Paper") ||
        (computerSelection == "Scissors" && playerSelection == "Rock") ||
        (computerSelection == "Paper" && playerSelection == "Scissors")) 
    {
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    }

  }

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
  