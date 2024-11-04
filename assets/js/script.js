// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them


document.addEventListener('DOMContentLoaded',function() {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function(){
            if (this.getAttribute('data-type') === 'submit') {
                alert ('You Clicked Submit!');
                runGame()
            } 
        })
    }

    //runGame() TBC 
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

//Functions
function runGame() {

//eventlistener for selection 
    let pickedCup = document.getElementsByClassName ('pickMeButton');
    for(let pickMeButton of pickedCup) {
    pickedCup.addEventListener('click',function(){
            if (this.getAttribute('data-type') === 'cupOne') {
                document.getElementById(btn-one.value);
                console.log(pickedCup);
            }
        })
        }
//Array
  let cupNumbers = [0,1,2];

//choose winning cup
    let winningCup = Math.floor(Math.random()*cupNumbers.length);
    console.log(winningCup,cupNumbers[winningCup]);
}

function compareNumber() {
  //Button Selected
  if (pickedCup.value === winningCup.value){
    outcome();
    incrementScore();
    alert('You Won');
  } else {
    alert('Loser');
    incrementWrongScore();
  }
    
}

function outcome() {
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function incrementWrongScore() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}
