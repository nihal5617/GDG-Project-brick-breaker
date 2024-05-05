// data.js
let playerName = "Nihal";
let equationAndOptions = [
  {
    equation: "2 + 2",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    equation: "3 + 3",
    options: ["5", "6", "7", "8"],
    answer: "6",
  },
  {
    equation: "4 + 4",
    options: ["7", "8", "9", "10"],
    answer: "8",
  },
  {
    equation: "5 + 5",
    options: ["9", "10", "11", "12"],
    answer: "10",
  },
  {
    equation: "2 * 2",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    equation: "3 * 3",
    options: ["5", "6", "7", "9"],
    answer: "9",
  },
  {
    equation: "4 * 4",
    options: ["7", "8", "9", "16"],
    answer: "16",
  },
  {
    equation: "5 * 5",
    options: ["9", "10", "11", "25"],
    answer: "25",
  },
];

function getPlayerName() {
  playerName = document.getElementById("playerName").value;
  if (playerName.trim() === "") {
    playerName = "Anonymous";
  }
}

function startGame() {
  getPlayerName();
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("gameScreen").style.display = "block";
  Text.draw(`Hello, ${playerName}! Click to play!`);
  canvas.removeEventListener("click", startGame);
  canvas.addEventListener("click", x);
}

function getRandomEquation() {
  return equationAndOptions[Math.floor(Math.random() * equationAndOptions.length)];
}

// document.getElementById("startButton").addEventListener("click", startGame);
startGame();
getRandomEquation();
