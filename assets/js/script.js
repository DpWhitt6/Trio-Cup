// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

var userChoice = null;
var firstName = null;
var lastName =null;
var username = null;



document.addEventListener('DOMContentLoaded',function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function(){
          if (this.getAttribute('data-type')=== 'submitWelcome') {
              welcomePage()
          } else if (this.getAttribute('data-type') === 'submit') {
                alert ('You Clicked Submit!');
                runGame()
            } else if (this.getAttribute('data-type')==='cupChoice'){
              userChoice = button.value;
            } 
        })
    }
})

// Welcome Page 

function welcomePage(buttons) {
  
}

//function welcomePage(formData){}

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

//Array - Maybe need to add value of each BTN here rather than HTML -Potentially under picked cup if cup1 click then ===0 etc..
  let cupNumbers = [0,1,2];

//choose winning cup
    let winningCup = Math.floor(Math.random()*cupNumbers.length);
    console.log(winningCup,cupNumbers[winningCup]); // Could one element = cup number and if the same then winner else loser
    compareNumber(winningCup)
} 


function compareNumber(winningCup) {
  console.log('userChoice', typeof userChoice);
  console.log('winningCup', typeof winningCup);
  if (userChoice == winningCup) {
    incrementScore();
    alert('You Won')
  } else {
    alert('Loser');
    incrementWrongScore();
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

// reset-game/ choices function

/**
 * Add reset game function 
 * Add reset choice function (after every submit users choice becomes null again)
 * Add game functions for best of 5, 7 unlimited 
 * Add Score Board 
 * Add Enter game screen with user form entry 
 * All screens to be apart of a singular HTML file 
 * Add game over screen
 */