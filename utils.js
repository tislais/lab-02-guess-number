export function evaluateGuess(guess, answer) {
    if (guess < answer) {
        return 'low';
    }

    if (guess > answer) {
        return 'high';
    }

    return 'correct';
}

