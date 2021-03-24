// import functions and grab DOM elements
import { evaluateGuess } from './utils.js';

// get elements
const guess = document.getElementById('guess').value;
const guessesLeftDiv = document.getElementById('guesses-left-div');
const guessButton = document.getElementById('guess-button');

// initialize state
let guessesLeft = 4;
let answer = Math.ceil(Math.random() * 20);

console.log(guess);

// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {
    guessesLeft--;
    console.log(guess);
});