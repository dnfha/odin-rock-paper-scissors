function getRandomNumberBetween1And3() {
  return Math.floor(Math.random() * 3 + 1);
}

function getComputerChoice() {
  const randomNumberBetween1And3 = getRandomNumberBetween1And3();
  let computerChoice = "";

  if (randomNumberBetween1And3 === 1) computerChoice = "rock";
  if (randomNumberBetween1And3 === 2) computerChoice = "paper";
  if (randomNumberBetween1And3 === 3) computerChoice = "scissors";

  return computerChoice;
}

function playGame(playerChoice) {
  function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    let result_msg = "";
    if (computerChoice === playerChoice) {
      result_msg = `It's a Tie. ${computerChoice} and ${playerChoice} have the same power!`;
    } else if (
      (computerChoice === "rock" && playerChoice === "scissors") ||
      (computerChoice === "paper" && playerChoice === "rock") ||
      (computerChoice === "scissors" && playerChoice === "paper")
    ) {
      result_msg = `You Lost! ${computerChoice} beats ${playerChoice}!`;
      computerScore++;
    } else {
      result_msg = `You Won! ${playerChoice} beats ${computerChoice}!`;
      humanScore++;
    }
    roundResultPara.innerText = result_msg;
  }

  playRound(playerChoice);

  let announceWinner = "";
  if (humanScore === 5) {
    announceWinner = "You are the Winner!";
  }
  if (computerScore === 5) {
    announceWinner = "Computer is the Winner!";
  }

  overallResultPara.innerText = `
    Human Score: ${humanScore}
    Computer Score: ${computerScore}

    ${announceWinner}
    `;
}

const playerSelectionBtn = document.querySelector("#player-selection-btn");
const resultDiv = document.createElement("div");
const roundResultPara = document.createElement("p");
const overallResultPara = document.createElement("p");
resultDiv.appendChild(roundResultPara);
resultDiv.appendChild(overallResultPara);
playerSelectionBtn.parentNode.appendChild(resultDiv);
let humanScore = 0;
let computerScore = 0;

playerSelectionBtn.addEventListener("click", (e) => {
  const playerChoice = e.target.id;
  playGame(playerChoice);
});
