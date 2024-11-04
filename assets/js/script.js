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
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

//Functions
function runGame() {

//Array
  let cupNumbers = [0,1,2];

//choose winning cup
    let winningCup = Math.floor(Math.random()*cupNumbers.length);
    console.log(winningCup,cupNumbers[winningCup]);
    compareNumber();

//Picked Cup 
   let pickedCup = document.getElementsByClassName('Btn');

   //To identify the active cup
   for (let i= 0; i < BigInt.length; i++){
     Btn[i].addEventListener('click',function() {
        let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
          });

    // Once active cup is defined get value - New Let to replace picked cup? 
    }
}



function compareNumber() {
  //Button Selected - Pick Cup not defined - error message - replace with new Let?
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
