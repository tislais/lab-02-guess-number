// import functions and grab DOM elements
import { 
    compareNumbers,
    endGame 
} from './utils.js';

// get elements
const userGuess = document.getElementById('guess');
const guessButton = document.getElementById('guess-button');
const guessesLeftDiv = document.getElementById('guesses-left-div');
const evaluationDiv = document.getElementById('evaluation-div');
const alertDiv = document.getElementById('alert');
const replayButton = document.getElementById('replay-button');
const instructions = document.getElementById('instructions');

// initialize state
let guessesLeft = 4;
let answer = Math.ceil(Math.random() * 20);

console.log(answer);

// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {
    let userGuessValue = userGuess.value;

    // validate that input isn't empty
    if (!userGuessValue) {
        alertDiv.textContent = 'Enter a number.';
        return;
    } else if (userGuessValue > 20 || userGuessValue <= 0) {
        alertDiv.textContent = `${userGuessValue} is not between 1 and 20!`;
        return;
    } else {
        guessesLeft--;
        alertDiv.textContent = '';
    
        if (guessesLeft >= 0) {
            const guessScore = compareNumbers(userGuessValue, answer);
            
            if (guessScore === 0) {
                evaluationDiv.textContent = 'YOU WIN!';
                endGame();
            } else {
                if (guessesLeft === 0) {
                    evaluationDiv.textContent = 'YOU LOSE!';
                    guessesLeftDiv.textContent = `You have ${guessesLeft} guesses left.`;
                    endGame();
                    return;
                }
                
                if (guessScore === -1) evaluationDiv.textContent = `${userGuessValue} is too low.`;
                if (guessScore === 1) evaluationDiv.textContent = `${userGuessValue} is too high.`;
                guessesLeftDiv.textContent = `${guessesLeft} guesses left.`;
                userGuess.value = '';
                userGuess.focus();
            }
        } else {
            guessesLeftDiv.textContent = "You're all out of guesses dude!";
            userGuess.value = '';
            userGuess.focus();
        }

    }

});

replayButton.addEventListener('click', () => {
    guessButton.classList.remove('hidden');
    userGuess.classList.remove('hidden');
    instructions.classList.remove('hidden');
    replayButton.classList.add('hidden');
    userGuess.value = '';
    answer = Math.ceil(Math.random() * 20);
    guessesLeft = 4;
    evaluationDiv.textContent = '';
    console.log(answer);
});