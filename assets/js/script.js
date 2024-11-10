// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

var userChoice = null;
var userScore = 0;
var gameChoice = 0;


//Welcome Page and game play buttons
document.addEventListener('DOMContentLoaded',function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function(){
         if (this.getAttribute('type')=== 'submitWelcome') {
            handleSubmit();
          } else if (this.getAttribute('data-type') === 'submitCup') {
                alert ('You Clicked Submit!');
                runGame();
            } else if (this.getAttribute('data-type')==='cupChoice'){
              userChoice = button.value;
          } 
       })
  }
})

//Number of games 
document.addEventListener('DOMContentLoaded',function(){
  let radios = this.getElementsByClassName('radio');

  for (let radio of radios) {
    radio.addEventListener('click', function() {
      if (this.getAttribute('data-type') === 'bestOfThree' ) {
      gameChoice = 3;
    } else if(this.getAttribute('data-type') === 'bestOfFive') {
      gameChoice = 5;
    }else if(this.getAttribute('data-type') === 'bestOfHundred') {
      gameChoice = 100;
    }
    })
  }
})

//Reset/restart event listeners
document.addEventListener('DOMContentLoaded',function(){
  let reset =this.getElementsByClassName('playOn');

  for (playOn of reset){
    playOn.addEventListener('click', function(){
     if (this.getAttribute('data-type')=== 'home'){
      const home = document.getElementById('welcome', 'threeCups', 'selectionArea', 'submit'
        , 'scoreArea', 'keepGoing');
        welcome.classList.remove('hidden');
        threeCups.classList.add('hidden');
        selectionArea.classList.add('hidden');
        submit.classList.add('hidden');
        scoreArea.classList.add('hidden');
        endGame.classList.add('hidden');
        homeBtn.classList.add('hidden');
        var ele = document.getElementsByName("bestOf");
          for(var i=0;i<ele.length;i++)
           ele[i].checked = false;
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

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {

  if (userChoice === null){
    alert('No cup selected, please select a cup!')
    return;
  }

//Array
  let cupNumbers = [0,1,2];

//choose winning cup
    let winningCup = Math.floor(Math.random()*cupNumbers.length);
    //console.log(winningCup,cupNumbers[winningCup]); 
    compareNumber(winningCup)
} 

//Winning cup 
function compareNumber(winningCup) {
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

//Score
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

//GameOver
function gameOver(){
  const gameOverScreen = document.getElementById('welcome', 'threeCups', 'selectionArea', 'submit'
  , 'scoreArea', 'keepGoing');
  welcome.classList.add('hidden');
  threeCups.classList.add('hidden');
  selectionArea.classList.add('hidden');
  submit.classList.add('hidden');
  scoreArea.classList.add('hidden');
  endGame.classList.remove('hidden');
  homeBtn.classList.remove('hidden');
}
