// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

var userChoice = null;
var userScore = 0;
var gameChoice = 0;


document.addEventListener('DOMContentLoaded',function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function(){
         if (this.getAttribute('type')=== 'submitWelcome') {
            handleSubmit();
            /**
             * Game length options best of 5,10 or unlimited - If 5 games player then hide all code except game over
             * add reset option to gameover - two choices reset game (back to 5/10/unlimited) or welcome page  
             */
          } else if (this.getAttribute('data-type') === 'submitCup') {
                alert ('You Clicked Submit!');
                runGame()
            } else if (this.getAttribute('data-type')==='cupChoice'){
              userChoice = button.value;
          } 
       })
  }
})

document.addEventListener('DOMContentLoaded',function(){
  let radios = this.getElementsByClassName('radio');

  for (let radio of radios) {
    radio.addEventListener('click', function() {
      if (this.getAttribute('data-type') === 'bestOfThree' ) {
      gameChoice = 3;
      console.log(gameChoice);
    } else if(this.getAttribute('data-type') === 'bestOfFive') {
      gameChoice = 5;
      console.log(gameChoice);
    }else if(this.getAttribute('data-type') === 'bestOfHundred') {
      gameChoice = 100;
      console.log(gameChoice);
    }
    })
  }
})

let form = document.getElementById('login-form');
form.addEventListener('submit', handleSubmit); 

//Form Filled 
function handleSubmit(event) {
  event.preventDefault();
      let username = document.getElementById('username').value;
      alert(`Welcome ${username}`); 
      openGame ();
}

function openGame () {
  const hideWelcome = document.getElementById('welcome', 'threeCups', 'selectionArea', 'submit'
  , 'scoreArea');
  welcome.classList.add('hidden');
  threeCups.classList.remove('hidden');
  selectionArea.classList.remove('hidden');
  submit.classList.remove('hidden');
  scoreArea.classList.remove('hidden');
}

// Number of games requested - else functionincorrect to be ammended 07/11/24


/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

/** User Choice variable needed */

//Functions
function runGame() {

  if (userChoice === null){
    alert('No cup selected, please select a cup!')
    return;
  }

//Array
  let cupNumbers = [0,1,2];

//choose winning cup
    let winningCup = Math.floor(Math.random()*cupNumbers.length);
    console.log(winningCup,cupNumbers[winningCup]); 
    compareNumber(winningCup)
} 


function compareNumber(winningCup) {
  console.log('userChoice', typeof userChoice);
  console.log('winningCup', typeof winningCup);
  if (userChoice == winningCup) {
    incrementScore();
    alert('You Won')
    scoreCount();
  } else {
    alert('Oh no, better luck next time!');
    incrementWrongScore();
    scoreCount();
  }
    
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function incrementWrongScore() {
  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++oldScore;
}

function scoreCount (incrementScore, incrementWrongScore) {
  let currentScore = parseInt(userScore);
  currentScore = userScore = ++currentScore;
  if (currentScore === gameChoice){
    gameOver()
  };
}


function gameOver(){
  const gameOverScreen = document.getElementById('welcome', 'threeCups', 'selectionArea', 'submit'
  , 'scoreArea');
  welcome.classList.add('hidden');
  threeCups.classList.add('hidden');
  selectionArea.classList.add('hidden');
  submit.classList.add('hidden');
  scoreArea.classList.add('hidden');
  endGame.classList.remove('hidden')
}

// reset-game/ choices function

/**
 * Add reset game function 
 * Add reset choice function (after every submit users choice becomes null again)
 * All screens to be apart of a singular HTML file 
 */