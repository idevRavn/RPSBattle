const userScore = document.querySelector("#player-score-txt");
const compScore = document.querySelector("#computer-score-txt");
const userSelected = document.querySelector("#user-selected");
const computerSelected = document.querySelector("#computer-selected");
const roundWinText = document.querySelector("#round-win-text");
const roundWinDiv = document.querySelector("#round-win");
const playAgainDiv = document.querySelector("#play-again");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const weapons = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
let scoreToWin = 5;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return weapons[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    userScore.textContent = playerScore;
    compScore.textContent = computerScore;
    return "You win!";
  } else {
    computerScore++;
    userScore.textContent = playerScore;
    compScore.textContent = computerScore;
    return "Computer wins!";
  }
}

function checkWinner() {
  if (playerScore === scoreToWin) {
    roundWinText.textContent = "You won the RPS Battle";
    roundWinDiv.style.backgroundColor = "#6ACFC7";
    stopGame();
  } else if (computerScore === scoreToWin) {
    roundWinText.textContent = "Computer won the RPS Battle";
    roundWinDiv.style.backgroundColor = "#8E0D3C";
    stopGame();
  }
}

function playGame(playerSelection) {
  if (playerScore < scoreToWin && computerScore < scoreToWin) {
    const computerSelection = getComputerChoice();
    userSelected.textContent = `You chose: ${playerSelection}`;
    computerSelected.textContent = `Computer chose: ${computerSelection}`;

    const roundResult = playRound(playerSelection, computerSelection);
    roundWinText.textContent = roundResult;

    checkWinner();
  }
}

function stopGame() {
  rockBtn.removeEventListener("click", () => {
    playGame("rock");
  });
  paperBtn.removeEventListener("click", () => {
    playGame("paper");
  });
  scissorsBtn.removeEventListener("click", () => {
    playGame("scissors");
  });
  playAgain();
}

function playAgain() {
  const playAgainText = document.createElement("button");
  playAgainText.textContent = "Play Again?";
  playAgainText.setAttribute("id", "againBtn");
  playAgainDiv.appendChild(playAgainText);

  againBtn.addEventListener("click", () => {
    document.location.reload("true");
  });
}

function startGame() {
  rockBtn.addEventListener("click", () => {
    playGame("rock");
  });

  paperBtn.addEventListener("click", () => {
    playGame("paper");
  });

  scissorsBtn.addEventListener("click", () => {
    playGame("scissors");
  });
}

startGame();
