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
  let humanScore = 0;
  let computerScore = 0;

  function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    let result_msg = "It's a tie!";
    if (computerChoice === "rock" && playerChoice === "scissors") {
      result_msg = "You Lost! Rock beats scissors!";
      computerScore++;
    }
    if (computerChoice === "rock" && playerChoice === "paper") {
      result_msg = "You Won! Paper beats rock!";
      humanScore++;
    }
    if (computerChoice === "paper" && playerChoice === "rock") {
      result_msg = "You Lost! Paper beats rock!";
      computerScore++;
    }
    if (computerChoice === "paper" && playerChoice === "scissors") {
      result_msg = "You Won! Scissors beats paper!";
      humanScore++;
    }
    if (computerChoice === "scissors" && playerChoice === "paper") {
      result_msg = "You Lost! Scissors beats paper!";
      computerScore++;
    }
    if (computerChoice === "scissors" && playerChoice === "rock") {
      result_msg = "You Won! Rock beats scissors!";
      humanScore++;
    }
    console.log(result_msg);
  }

  /*   for (let i = 0; i < 5; i++) {
    playRound();
  } */

  playRound(playerChoice);

  console.log(`
    Human Score: ${humanScore}
    Computer Score: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You are the winner!");
  } else if (humanScore < computerScore) {
    console.log("Computer is the Winner!");
  } else {
    console.log("It's a tie!");
  }
}

const playerSelectionBtn = document.querySelector("#player-selection-btn");

playerSelectionBtn.addEventListener("click", (e) => {
  const playerChoice = e.target.id;
  playGame(playerChoice);
});
