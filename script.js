'use strict';

// const text = (document.querySelector('.message').textContent);


// const s = document.querySelector('.message').textContent = 'Correct Number !';


//  document.querySelector('.number').textContent = 13;
//  document.querySelector('.score').textContent = 10;


//  document.querySelector('.guess').value = 23;
//  console.log(document.querySelector('.guess').value);

//handling click events
const v = 20;
const t = 3000;

const secretNumber = Math.trunc(Math.random() * 20) + 1;



let score = 20;


document.querySelector('.check').addEventListener('click', function()
{
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess);

    //when there is no input
    if(!guess){

        document.querySelector('.message').textContent = "No number";
    }
    
    //when player win the game
    else if(guess === secretNumber)
    {
        document.querySelector('.message').textContent = "Correct Number !";

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347'

        document.querySelector('.number').style.width = '30rem';

    }

    //when guess is grater than the number
    else if(guess > secretNumber)
    {
        if(score > 1)
        {
            document.querySelector('.message').textContent = "Guess is to high";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = "You lost the game";
            document.querySelector('.score').textContent = 0;
        }
        

    }
    
    //when score is less than the number
    else if(guess < secretNumber)
    {
        if(score > 1)
        {
            document.querySelector('.message').textContent = "Guess is to low";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = "You lost the game";
            document.querySelector('.score').textContent = 0;
        }
    }
})
