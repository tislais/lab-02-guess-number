// IMPORT MODULES under test here:
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('should take in an integer, and return the guess as "1" when too high, "-1" when too low, "0" when correct', (expect) => {
    const actualGuessHigh = compareNumbers(5, 10);
    const actualGuessLow = compareNumbers(10, 10);
    const actualGuessCorrect = compareNumbers(15, 10);

    // three arguments: actual, expected, some description
    expect.equal(actualGuessHigh, -1, '5 is too low');
    expect.equal(actualGuessLow, 0, '10 is correct');
    expect.equal(actualGuessCorrect, 1, '15 is too high');
});