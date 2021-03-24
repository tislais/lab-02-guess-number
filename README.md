# Tis's Plan

## HTML Setup

1. Div
    - Why? Communicate instructions and rules.
2. Input
    - Why? Get user's guessed number
    - How? Number input element
3. Button
    - Why? On click, will compare user's guessed number with winning number.
    - How? addEventListener
4. Div
    - Why? Visual feedback of right or wrong
    - How? someDiv.textContent
5. Div 
    - Why? To inform user of how many guesses they have remaining.
    - How? someOtherDiv.textContent


## Initialize State

1. Guesses left
    - guessesLeft

## Events

1. What happens when the user inputs a number and clicks the button?
    - Decrement guessesLeft
    - Compare guess with answer
    - Inform user if it's right or wrong
    - Inform user of guesses left