// Variable for the game state

let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// variable to store reference to Dom nodes

const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

// Btn setup

rollBtn.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  // console.log(randomNumber);

  if (player1Turn) {
    player1Score += randomNumber;
    player1Scoreboard.innerText = player1Score;
    player1Dice.innerText = randomNumber;
    console.log("Player1", randomNumber);
    player2Dice.classList.add("active");
    player1Dice.classList.remove("active");
    message.textContent = "Player 2 turn";
    checkScore(player1Score, "Player 1");
  } else {
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    player2Score += randomNumber;
    player2Scoreboard.innerText = player2Score;
    player2Dice.innerText = randomNumber;
    console.log("Player2", randomNumber);
    message.textContent = "Player 1 turn";
    checkScore(player2Score, "Player 2");
  }
  player1Turn = !player1Turn;
  
});

function checkScore(score, player) {
  if (score >= 20) {
    message.innerText = `${player} won 🎊`;
    console.log(`Hurry ${player} won🎊 ${score}`);
    rollBtn.style.display = "none";
    resetBtn.style.display = "inline-block";
  }
}

resetBtn.addEventListener("click", reset);

function reset(){
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;
    player1Dice.innerText = "-";
    player2Dice.innerText = "-";
    player1Scoreboard.innerText = 0;
    player2Scoreboard.innerText = 0;
    message.textContent = "Player 1 turn";
    player1Turn = true;
    resetBtn.style.display = "none";
    rollBtn.style.display = "inline-block";
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
}