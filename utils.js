
const guessButton = document.getElementById('guess-button');
const userGuess = document.getElementById('guess');
const replayButton = document.getElementById('replay-button');
const instructions = document.getElementById('instructions');
const guessesLeftDiv = document.getElementById('guesses-left-div');

export function compareNumbers(guess, answer) {
    if (guess < answer) {
        return -1;
    }

    if (guess > answer) {
        return 1;
    }

    return 0;
}

export function endGame() {
    guessesLeftDiv.textContent = '';
    guessButton.classList.add('hidden');
    userGuess.classList.add('hidden');
    instructions.classList.add('hidden');
    replayButton.classList.remove('hidden');
}