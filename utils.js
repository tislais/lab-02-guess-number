
const guessButton = document.getElementById('guess-button');
const userGuess = document.getElementById('guess');
const replayButton = document.getElementById('replay-button');
const instructions = document.getElementById('instructions');
const guessesLeftDiv = document.getElementById('guesses-left-div');

export function compareNumbers(guess, answer) {
    if (guess < answer) {
        console.log('low');
        return 'low';
    }

    if (guess > answer) {
        console.log('high');
        return 'high';
    }

    console.log('correct');
    return 'correct';
}

export function endGame() {
    guessesLeftDiv.textContent = '';
    guessButton.classList.add('hidden');
    userGuess.classList.add('hidden');
    instructions.classList.add('hidden');
    replayButton.classList.remove('hidden');
}