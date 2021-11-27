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
    let playerSelection = playerSelection.toLowerCase()

  }