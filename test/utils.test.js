// IMPORT MODULES under test here:
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('should take in an integer, and return "high", "low, or "correct"', (expect) => {
    const actualGuessHigh = compareNumbers(5, 10);
    const actualGuessLow = compareNumbers(10, 10);
    const actualGuessCorrect = compareNumbers(15, 10);

    // three arguments: actual, expected, some description
    expect.equal(actualGuessHigh, 'low', '5 is too low');
    expect.equal(actualGuessLow, 'correct', '10 is correct');
    expect.equal(actualGuessCorrect, 'high', '15 is too high');
});