import { screen } from "../variables/globalVariables.js"
import { displayNumber } from "./getNumbers.js";

// Main function to calculate the operation in screen
export function calculator() {
    // Extract the numbers and the operator from the screen string
    let characters = separateCharacters();
    // Solely make the operation if in the extraction there was a valid operation
    if (characters.hasSymbol) {
        makingOperation(characters);
    }
}

// Function to divide the current value in screen into different variables
function separateCharacters() {
    // Initialize variables to store the parts of the operation
    let symbolIndex = '';
    let numberLeft = '';
    let numberRight = '';
    let symbolChosen = '';
    // Array with valid symbols
    let symbols = ["+", "–", "x", "/"];
    // Get the current text from the calculator screen
    const allCharacters = screen.value;
    let hasSymbol = false;
    // Turn the string of the screen value into an array
    let newArray = allCharacters.split("");

    // Iterate through the array to find where the operator is in
    newArray.forEach(element => {
        symbols.forEach(symbol => {
            if (element == symbol) {
                // Find the index of the symbol within the array
                symbolIndex = newArray.indexOf(element);
                // Extract everything before the symbol (left number)
                numberLeft = newArray.slice(0, (symbolIndex)).join("");
                // Extract everything after the symbol (right number)
                numberRight = newArray.slice(symbolIndex+1).join("");
                // Store the symbol and change the boolean to true
                symbolChosen = symbol;
                hasSymbol = true;
            }
        });
    });

    // Return the data as an object
    return {numberLeft, numberRight, symbolChosen, hasSymbol};
}

// Function to make the operation
function makingOperation(character) {
    let result = 0;
    // Convert the stored string into numbers so the operation can make it without problems
    const left = Number(character.numberLeft);
    const right = Number(character.numberRight);

    // Evaluate the chosen symbol and make the operation
    switch (character.symbolChosen) {
        case '+':
            result = left + right;
            break;
        case '–':
            result = left - right;
            break;
        case 'x':
            result = left * right;
            break;
        case '/':
            result = left / right;
            break;
    }

    // Upate the calculator screen with the final result
    screen.value = result;
}