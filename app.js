// A function that randomly returns either rock, paper or scissors
// Create a container (dictionary) to store the list of possible game choices
// Assign a unique number ID to rock, paper and scissors, 1 - 3
// Randomly generate a number
// Print the choice with the number ID that matches 

// helper functions

const choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection, computerScore, playerScore) {
    // convert user's input to lowercase (user input can be case-insensitive, conversion will take care of it)
    // transform user's input to desired format: "Rock", "Paper", "Scissors"
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    console.log(`You: ${playerSelection} Computer: ${computerSelection}`);

    // if tie
    if (computerSelection == playerSelection) {
        console.log(`This round is a tie! Computer:${computerScore} You:${playerScore}`);
    }

     // where computer wins
    if (
        (computerSelection == "Rock" && playerSelection == "Scissors") ||
        (computerSelection == "Scissors" && playerSelection == "Paper") ||
        (computerSelection == "Paper" && playerSelection == "Rock") 
    )   {
        computerScore += 1;
        console.log(`You lose this round! ${computerSelection} beats ${playerSelection}. Computer:${computerScore} You:${playerScore}`);
        } // where player wins 
    else {
        playerScore += 1;
        console.log(`You win this round! ${playerSelection} beats ${computerSelection}. Computer:${computerScore} You:${playerScore}`);
    }

    return [computerScore, playerScore];
}

// main code
function game() {
    // initialise scores
    let computerScore = 0;
    let playerScore = 0;
    let results = [computerScore, playerScore];
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose Rock, Paper or Scissors? Type an option and press enter!");

        // user validation 
        while (!(choices.includes(playerSelection))) {
            console.log("Invalid choice. Please enter only either rock, paper, or scissors.");
            playerSelection = prompt("Choose Rock, Paper or Scissors? Type an option and press enter!");
        }
        results = playRound(playerSelection, computerPlay(), computerScore, playerScore);
        computerScore = results[0]
        playerScore = results[1]
      }
    final_computerScore = results[0];
    final_playerScore = results[1];
    
    if (final_computerScore == final_playerScore) {
        return `The game is a tie! Computer:${final_computerScore} You:${final_playerScore}`;
    } else if (final_computerScore < final_playerScore) {
        return `You won the game! Computer:${final_computerScore} You:${final_playerScore}`;
    } else {
        return `You lost the game! Computer:${final_computerScore} You:${final_playerScore}`;
    }
}
