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
