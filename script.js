'use strict';
//selecting elements
const score0El= document.querySelector('#score--0');
const score1El= document .getElementById('score--1');
const diceEl= document.querySelector('.dice');
const btnNew= document.querySelector('.btn--new');
const btnRoll= document.querySelector('.btn--roll');
const btnHold= document.querySelector('.btn--hold');
const current0El= document.getElementById('current--0')
const current1El= document.getElementById('current--1')
const player0El= document.querySelector('.player--0')
const player1El= document.querySelector('.player--1')

//starting conditions
score0El.textContent=0;
score1El.textContent=0;
 // we can create a hidden class in css and set the display propert has none(display:none)
 let scores,currentScore,activePlayer,playing
 const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
  
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
  
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
  };
  init();
  
const switchPlayer= function(){
    document.querySelector(`#current--${activePlayer}`).textContent=0;
    currentScore=0;
    activePlayer= activePlayer === 0 ? 1:0;
    player0El.classList.toggle('player--active');
    console.log('working');
    player1El.classList.toggle('player--active');
}

//implementing rolling dice functionality
btnRoll.addEventListener("click",function(){
    //1.generating a random dice roll
    if(playing){
    const dice=Math.trunc(Math.random()*6)+1;
    //2. display the dice
    diceEl.src=`dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    //check if it is rolled 1
    if(dice !== 1){
         //add the rolled dice to the current score
         console.log(dice)
         currentScore+= dice;
         document.querySelector(`#current--${activePlayer}`).textContent=currentScore;
         //current0El.textContent=currentScore;//this code replaced with the above code for dynamic change
    }
    else{
           //switch to next player
          switchPlayer();
        }
    }
})


    btnHold.addEventListener('click',function(){
        // to add the current score to the total score
        if(playing){
        scores[activePlayer]+=currentScore;
        //score[1]=score[1]+currentScore
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
        //check if player score is >=100
        console.log(`the active player is ${activePlayer}`)
        //finish game
        if(scores[activePlayer]>=20){
            playing=false;
       console.log(`the active player is ${scores[activePlayer]}`)
       document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
       console.log('player won')
       document.querySelector(`.player--${activePlayer}`).classList.remove('.player--active')
       diceEl.classList.add('hidden');
        }
        else
        //switch player
        switchPlayer();
    }
    })
    btnNew.addEventListener('click',init);
    
    


