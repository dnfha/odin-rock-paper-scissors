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

function getHumanChoice() {
  let humanChoice = "";

  do {
    humanChoice = prompt(
      "Please type 'rock', 'paper' or 'scissors': "
    ).toLowerCase();
  } while (
    !(
      humanChoice === "rock" ||
      humanChoice === "paper" ||
      humanChoice === "scissors"
    )
  );

  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    let result_msg = "It's a tie!";
    if (computerChoice === "rock" && humanChoice === "scissors") {
      result_msg = "You Lost! Rock beats scissors!";
      computerScore++;
    }
    if (computerChoice === "rock" && humanChoice === "paper") {
      result_msg = "You Won! Paper beats rock!";
      humanScore++;
    }
    if (computerChoice === "paper" && humanChoice === "rock") {
      result_msg = "You Lost! Paper beats rock!";
      computerScore++;
    }
    if (computerChoice === "paper" && humanChoice === "scissors") {
      result_msg = "You Won! Scissors beats paper!";
      humanScore++;
    }
    if (computerChoice === "scissors" && humanChoice === "paper") {
      result_msg = "You Lost! Scissors beats paper!";
      computerScore++;
    }
    if (computerChoice === "scissors" && humanChoice === "rock") {
      result_msg = "You Won! Rock beats scissors!";
      humanScore++;
    }
    console.log(result_msg);
  }

  for (let i = 0; i < 5; i++) {
    playRound();
  }

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

playGame();
