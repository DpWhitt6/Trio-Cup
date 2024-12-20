//variables
var userChoice = null;
var gamesPlayed = 0;
var gameChoice = 0;
var correctGuess = 0;
var incorrectGuess = 0;

//Constants
const welcomePage = document.getElementById('welcome');
welcomePage.classList.remove('hidden');
const gamePlayPage = document.getElementById('gameScreen');
gamePlayPage.classList.add('hidden');
const gameOverPage = document.getElementById('gameOverScreen');
gameOverPage.classList.add('hidden');

//Welcome Page and game play buttons
document.addEventListener('DOMContentLoaded', function () {
  let buttons = document.getElementsByTagName('button');
/** 
 * Submit button controls to move to gameplay page
 * Cup choice - selecting the cup 
 * Submit cup - confirmation of cup choice
*/
  for (let button of buttons) {
    button.addEventListener('click', function () {
      if (this.getAttribute('type') === 'submitWelcome') {
        handleSubmit();
      } else if (this.getAttribute('data-type') === 'submitCup') {
        runGame();
      } else if (this.getAttribute('data-type') === 'cupChoice') {
        userChoice = button.value;
      }
    });
  }
});

//Number of games 
document.addEventListener('DOMContentLoaded', function () {
  let radios = this.getElementsByClassName('radio');

  // Game play length choices.
  for (let radio of radios) {
    radio.addEventListener('click', function () {
      if (this.getAttribute('data-type') === 'bestOfThree') {
        gameChoice = 3;
      } else if (this.getAttribute('data-type') === 'bestOfFive') {
        gameChoice = 5;
      } else if (this.getAttribute('data-type') === 'bestOfHundred') {
        gameChoice = 100;
      }
    });
  }
});

//Reset/restart event listeners
document.addEventListener('DOMContentLoaded', function () {
  let reset = this.getElementsByClassName('playOn');

  // Reset button
  for (var playOn of reset) {
    playOn.addEventListener('click', function () {
      if (this.getAttribute('data-type') === 'home') {
        welcomePage.classList.remove('hidden');
        gamePlayPage.classList.add('hidden');
        gameOverPage.classList.add('hidden');
        var ele = document.getElementsByName("bestOf");
        for (var i = 0; i < ele.length; i++)
          ele[i].checked = false;

      }
    });
  }
});

let form = document.getElementById('login-form');
form.addEventListener('submit', handleSubmit);

//Form Filled 
function handleSubmit(event) {
  event.preventDefault();
  let username = document.getElementById('username').value;
  alert(`Welcome ${username}`);
  openGame();
}

//Open Game play page
function openGame() {
  welcomePage.classList.add('hidden');
  gamePlayPage.classList.remove('hidden');
  gameOverPage.classList.add('hidden');
}

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {

  if (userChoice === null) {
    alert('No cup selected, please select a cup!');
    return;
  }

  //Array
  let cupNumbers = [1, 2, 3];

  //choose winning cup
  let winningCup = Math.floor(Math.random() * cupNumbers.length);

  /**
   * Total games played vs the game play choosen 
   * If game plan is less tahn game play user choice can still
   * be used.
   */
  if (gamesPlayed < gameChoice && userChoice) {
    compareNumber(winningCup);
    userChoice = null;
    gamesPlayed++;
  }
  if (gamesPlayed === gameChoice) {
    gameOver();
  }
}

//Winning cup 
function compareNumber(winningCup) {
  if (userChoice == winningCup) {
    incrementScore();
    alert('You Won');
  } else {
    alert('Oh no, better luck next time!');
    incrementWrongScore();
  }
}

//Score
function incrementScore() {
  document.getElementById("score").innerText = ++correctGuess;
}

function incrementWrongScore() {
  document.getElementById("incorrect").innerText = ++incorrectGuess;
}

//GameOver
function gameOver() {
  welcomePage.classList.add('hidden');
  gamePlayPage.classList.add('hidden');
  gameOverPage.classList.remove('hidden');
  let username = document.getElementById('username').value;
  document.getElementById('thanks').innerHTML=(`${username}! Thanks for playing!`);
  resetScores();
}

//Reset scores to 0
function resetScores() {
  userChoice = null;
  correctGuess = 0;
  incorrectGuess = 0;
  gameChoice = 0;
  gamesPlayed = 0;

  document.getElementById("incorrect").innerText = incorrectGuess;
  document.getElementById("score").innerText = correctGuess;
}