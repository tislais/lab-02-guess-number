// import functions and grab DOM elements
import { evaluateGuess } from './utils.js';

// get elements
const userGuess = document.getElementById('guess');
const guessesLeftDiv = document.getElementById('guesses-left-div');
const guessButton = document.getElementById('guess-button');
const evaluationDiv = document.getElementById('evaluation-div');
const alertDiv = document.getElementById('alert');
const replayButton = document.getElementById('replay-button');

// initialize state
let guessesLeft = 4;
let answer = Math.ceil(Math.random() * 20);

console.log(answer);

// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {

    // validate that input isn't empty
    if (!userGuess.value) {
        alertDiv.textContent = 'Enter a number.';
        console.log(guessesLeft);
        return;
    } else if (userGuess.value > 20 || userGuess.value <= 0) {
        alertDiv.textContent = `${userGuess.value} is not between 1 and 20!`;
        console.log(guessesLeft);
        return;
    } else {
        guessesLeft--;
        alertDiv.textContent = '';
    
        if (guessesLeft >= 0) {
            const guessScore = evaluateGuess(userGuess.value, answer);
            
            if (guessScore === 'correct') {
                evaluationDiv.textContent = 'YOU WIN!';
                guessesLeftDiv.textContent = '';
                guessButton.classList.add('hidden');
                userGuess.classList.add('hidden');
                replayButton.classList.remove('hidden');
            } else {
                if (guessesLeft === 0) {
                    evaluationDiv.textContent = 'GAME OVER.';
                    guessesLeftDiv.textContent = `You have ${guessesLeft} guesses left.`;
                    guessesLeftDiv.textContent = '';
                    guessButton.classList.add('hidden');
                    userGuess.classList.add('hidden');
                    replayButton.classList.remove('hidden');
                    return;
                }
                evaluationDiv.textContent = `${userGuess.value} is too ${guessScore}.`;
                guessesLeftDiv.textContent = `${guessesLeft} guesses left.`;
            }
        } else {
            guessesLeftDiv.textContent = "You're all out of guesses dude!";
            userGuess.value = '';
        }

    }

});

replayButton.addEventListener('click', () => {
    guessButton.classList.remove('hidden');
    userGuess.classList.remove('hidden');
    replayButton.classList.add('hidden');
    userGuess.value = '';
    answer = Math.ceil(Math.random() * 20);
    guessesLeft = 4;
    evaluationDiv.textContent = '';
    console.log(answer);
});