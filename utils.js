export function evaluateGuess(guess, answer) {
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

