// A function that randomly returns either rock, paper or scissors
// Create a container (dictionary) to store the list of possible game choices
// Assign a unique number ID to rock, paper and scissors, 1 - 3
// Randomly generate a number
// Print the choice with the number ID that matches 

// initialise scores
let computerScore = 0;
let playerScore = 0;

// Player selection
// buttons is a node list. It looks and acts much like an array: NodeList(3) [button, button, button]
const buttons = document.querySelectorAll("button"); 
// we use the .forEach method to iterate through each button 
buttons.forEach((button) => {
    // and for each one we add a 'click' listener, with a callback function that gets called when the event happens
    button.addEventListener("click", function() {
        playRound(button.value)
    })
});

/* UI */
// return to startgame.html

function restartGame() {
    const restartSection = document.getElementById("restart");
    const restartButton = document.createElement("button");
    restartButton.textContent = "Play again!";
    restartSection.appendChild(restartButton);
    restartButton.onclick = function () {
        location.href = "startgame.html";
    }
}

function disableButtons() {
    buttons.forEach((button) => {
        button.disabled = true;
    })
}

/* GAME */
// Computer selection / helper functions
function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

//rmb: function declarations are "hoisted"
function playRound(playerSelection) { //playerSelection == button.value
    computerSelection = computerPlay()
    let game_message = document.getElementById("game-message");
    let selections = document.getElementById("selections");
    let scores = document.getElementById("scores");

    // if tie
    if (computerSelection == playerSelection) {
        game_message.textContent = "This round is a tie!";
        selections.textContent = `Computer:${computerSelection} You:${playerSelection}`;
        scores.textContent = `Computer:${computerScore} You:${playerScore}`;
    } // where computer wins
    else if (
        (computerSelection == "Rock" && playerSelection == "Scissors") ||
        (computerSelection == "Scissors" && playerSelection == "Paper") ||
        (computerSelection == "Paper" && playerSelection == "Rock") 
    )   {
        computerScore += 1;
        game_message.textContent = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
        selections.textContent = `Computer:${computerSelection} You:${playerSelection}`;
        scores.textContent = `Computer:${computerScore} You:${playerScore}`;

        if (computerScore == 5) {
            game_message.textContent += " And you lose the game!";
            disableButtons();
            restartGame();
        }
        } // where player wins 
    else {
        playerScore += 1;
        game_message.textContent = `You win this round! ${playerSelection} beats ${computerSelection}`;
        selections.textContent = `Computer:${computerSelection} You:${playerSelection}`;
        scores.textContent = `Computer:${computerScore} You:${playerScore}`;

        if (playerScore == 5) {
            game_message.textContent += " And you win the game!";
            disableButtons();
            restartGame();
        }
    }
}


// UI
// Event listener that calls the playRound function with the playerSelection every time a button is clicked
// The variable (i.e., a 'named storage' for data), button, stores a function

/* AddEventListener for just one button, targeting its ID
const btnRock = document.getElementById("btnRock");
btnRock.addEventListener('click', function (e) {
    console.log(e.target); 
}); */

