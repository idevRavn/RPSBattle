function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "error";
  }
}

function getPlayerChoice() {
  let playerChoice = prompt("Rock, Paper, or Scissors?");
  if (
    playerChoice.toLowerCase() === "rock" ||
    playerChoice.toLowerCase() === "paper" ||
    playerChoice.toLowerCase() === "scissors"
  ) {
    return playerChoice.toLowerCase();
  } else {
    return "error";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let round = 1;
  for (round; round <= 5; round++) {
    let result = playRound(getPlayerChoice(), getComputerChoice());

    if (result === "win") {
      playerScore++;
    } else if (result === "lose") {
      computerScore++;
    } else {
      playerScore++;
      computerScore++;
    }
  }
  document.querySelector(
    "#playerScore"
  ).textContent = `Player Score: ${playerScore}`;
  document.querySelector(
    "#computerScore"
  ).textContent = `Computer Score: ${computerScore}`;
  if (playerScore > computerScore) {
    console.log("You won");
    document.querySelector("#gameWinner").textContent = "You won!";
  } else if (playerScore < computerScore) {
    document.querySelector("#gameWinner").textContent =
      "Computer win the game!";
    console.log("Computer won");
  } else {
    console.log("It's a tie");
    document.querySelector("#gameWinner").textContent = "It's a tie!";
  }
}

game();
