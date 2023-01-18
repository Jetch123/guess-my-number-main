'use strict'
let number = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent=message;
}
//select elements
//document.querySelector ('.message').textContent = 'correct number'

//document.querySelector ('.score').textContent = '21'
//document.querySelector ('.guess').textContent = '23'



document.querySelector('.check').addEventListener('click', function(){
    const guess= Number(document.querySelector('.guess').value);
 console.log( guess,typeof guess);

 //support for not entering a number by the player
if(!guess){
    displayMessage('Please input valid number :( ')
}
else if (guess === number){
    document.querySelector ('.number').textContent = number;
    displayMessage('Correct number ;) :) ')
    document.querySelector('body').style.backgroundColor ='green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.border =' 7px solid black';

    if (score> highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }
}
//when guess is wrong
else if(guess !==number){
    if(score > 1){
        displayMessage(guess>number ?'Too high... :) ': 'Too low... :) ');
        score--;
        document.querySelector ('.score').textContent = score;
    }
    else{
        displayMessage(textContent ='You lost the game... :) ');
        document.querySelector('.score').textContent = score
}

     
}
 
})

// 1. select element again and attach a click event handler
document.querySelector('.again').addEventListener('click', function(){


    // 2. initial value of 'score' and 'secretNumber'
score=20;
number = Math.trunc(Math.random()*20) + 1;

 // 3. restore initial conditions(message, score , guess input field, styles)
 displayMessage('start guessing game.. :)')
document.querySelector ('.score').textContent = score;
document.querySelector ('.number').textContent = '?';
document.querySelector ('.guess').value= '';
document.querySelector ('body').style.background ='#222';
document.querySelector('.number').style.width = '15rem';
document.querySelector('.number').style.border ='';

})