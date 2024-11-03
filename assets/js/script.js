// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener('DOMContentLoaded',function(){
    let buttons = document.getElementsByTagName('button');


/**
* Gets the current score from the DOM and increments it by 1
*/
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
  }
  
  /**
  * Gets the current tally of incorrect answers from the DOM and increments it by 1
  */
  function incrementWrongAnswer() {
  
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
    
  }