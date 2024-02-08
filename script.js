// rock paper scissor
//reference tags
const choices = ["rock","paper","scissors"];
const PlayerDisplay = document.getElementById('PlayerDisplay');
const ComputerDisplay = document.getElementById('ComputerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const ComputerScoreDisplay = document.getElementById('ComputerScoreDisplay');
const TieScoreDisplay = document.getElementById('TieScoreDisplay');

//player, Computer and Tie score
let playerScore =0;
let computerScore =0;
let tieScore =0;

//Function for the game
function playGame(playerChoice){
    
    //generate random number and assigned it to arr[] choice
    const computerChoice = choices[Math.floor(Math.random()*3)];

    let results = "";

    //Check for the tie :- If computer choice and player's choice is same
    if(playerChoice === computerChoice){
        results = "It's a TIE";
        tieScore++;
    }
    else{
        //using switch statements to switch between cases and Tenary Operators to assign value if conditions are true
        switch(playerChoice){
            case "rock":
                results = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;

            case "paper":
                results = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;

            case "scissors":
                results = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    //Adding text Content with Player's and computer's choice on webpage
    PlayerDisplay.textContent = `Player's choice : ${playerChoice}`;
    ComputerDisplay.textContent = `Computer's Choice : ${computerChoice}`;
    resultDisplay.textContent = results;

    //removeing CLASS to display the text in BLACK
    resultDisplay.classList.remove("greenText","redText");
    switch(results){
        case "YOU WIN!":
            //This will change the text to green color and Add point in Player's score
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;

            ////This will change the text to red color and Add point in Computer's score
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            ComputerScoreDisplay.textContent = computerScore;
            break;
            //if it's a TIE 
        case "It's a TIE":
            TieScoreDisplay.textContent = tieScore;
            break;
    }
}