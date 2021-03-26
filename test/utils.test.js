// IMPORT MODULES under test here:
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('should take in an integer, and return -1 for low, 0 for correct, or 1 for high', (expect) => {
    const actualGuessHigh = compareNumbers(5, 10);
    const actualGuessLow = compareNumbers(10, 10);
    const actualGuessCorrect = compareNumbers(15, 10);

    // three arguments: actual, expected, some description
    expect.equal(actualGuessHigh, -1, '5 is too low, compared to 10');
    expect.equal(actualGuessLow, 0, '10 is correct, compared to 10');
    expect.equal(actualGuessCorrect, 1, '15 is too high, compared to 10');
});