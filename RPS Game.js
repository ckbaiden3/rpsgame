//if player clicks rock, store rock
//generate computer move
//if player clicks paper, store rock
//generate computer move
//if player clicks scissors, store rock
//generate computer move
//compare the two and decide winner
//Tell player what computer move was
//Tell player who won
// if player wins, player tally increases by 1

let gameHistory = [];

var rockbtn = document.getElementById("rock");
rockbtn.addEventListener("click", playRock);

var paperbtn = document.getElementById("paper");
paperbtn.addEventListener("click", playPaper);

var scissorsbtn = document.getElementById("scissors");
scissorsbtn.addEventListener("click", playScissors);

var usernameBtn = document.getElementById("username-btn");
usernameBtn.addEventListener("click", handleUsername);

var playerscore = 0;
var computerscore = 0;

function drawHistory() {
  const historyElement = document.getElementById("history-list");
  let displayString = "";
  for (let i = 0; i < gameHistory.length; i++) {
    displayString +=
      "<li>" +
      gameHistory[i].playerMove +
      " vs " +
      gameHistory[i].cpuMove +
      "</li>";
  }
  historyElement.innerHTML = displayString;
}

function playRock() {
  playTheGame("rock");
}
function playScissors() {
  playTheGame("scissors");
}
function playPaper() {
  playTheGame("paper");
}
function handleUsername() {
  var input = document.getElementById("username-input");
  var display = document.getElementById("username-display");
  display.innerText = input.value;
}

function showResult(resultMessage) {
  var result = document.getElementById("result");
  result.innerText = resultMessage;
}
function showCPUMove(x) {
  var movePlayedByCPU = document.getElementById("cpu-move");
  movePlayedByCPU.innerText = x;
}
function generatecomputerMove() {
  var randomNumber = Math.random();
  if (randomNumber <= 0.33) {
    return "rock";
  } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
function playTheGame(playerMove) {
  var cpuMove = generatecomputerMove();
  showCPUMove(cpuMove);
  if (cpuMove === "rock") {
    if (playerMove === "rock") {
      showResult("it's a draw");
    } else if (playerMove === "paper") {
      playerscore++;
      showResult("you win!");
    } else if (playerMove === "scissors") {
      computerscore++;
      showResult("you lose!");
    }
  } else if (cpuMove === "paper") {
    if (playerMove === "rock") {
      computerscore++;
      showResult("you lose!");
    } else if (playerMove === "paper") {
      showResult("its a draw");
    } else if (playerMove === "scissors") {
      playerscore++;
      showResult("you win!");
    }
  } else if (cpuMove === "scissors") {
    if (playerMove === "rock") {
      playerscore++;
      showResult("you win!");
    } else if (playerMove === "paper") {
      computerscore++;
      showResult("you lose!");
    } else if (playerMove === "scissors") {
      showResult("it's a draw");
    }
  }
  document.getElementById("player-score").innerText = playerscore;
  document.getElementById("cpu-score").innerText = computerscore;

  let gameChoices = { playerMove, cpuMove };
  gameHistory.push(gameChoices);
  drawHistory();
}

//If showResult is 'you win', add 1 to Player score,
//If showResult is 'you lose', add 1 to Computer score,
//If showResult is 'it's a draw', do not change scores,
//If player score reaches 5, announce 'Champion'  and end game,
//If computer score reaches 5, announce 'Loser' and end game.
//function scoreBoard(){
//   if showResult === "you win!"{
//player score ++
//}
