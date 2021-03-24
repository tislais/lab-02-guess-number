// IMPORT MODULES under test here:
import { evaluateGuess } from '../utils.js';

const test = QUnit.test;

test('should take in an integer, and return the guess as "high", "low", "correct"', (expect) => {
    const actualGuessHigh = evaluateGuess(5, 10);
    const actualGuessLow = evaluateGuess(10, 10);
    const actualGuessCorrect = evaluateGuess(15, 10);

    // three arguments: actual, expected, some description
    expect.equal(actualGuessHigh, 'low', '5 is too low');
    expect.equal(actualGuessLow, 'correct', '10 is correct');
    expect.equal(actualGuessCorrect, 'high', '15 is too high');
});