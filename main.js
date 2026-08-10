// Import all functions for main file
import { cleanScreen, deleteCharacter } from "./modules/functions/cleanInput.js";
import { displayNumber } from "./modules/functions/getNumbers.js";
import { calculator } from "./modules/functions/calculator.js";

// If there's a completed operation
let hasResult = false;

let deleteButton = document.getElementById("deleteButton");
let cleanButton = document.getElementById('cleanButton');
let equalButton = document.getElementById('equal');

let point = document.getElementById('point');
let numbers = document.querySelectorAll('.number');
let operations = document.querySelectorAll('.operation')

// Click event to all the numbers
numbers.forEach(element => {
    element.addEventListener('click', (e) => {
        // If a result is currently on the screen, clear it before typing a new number
        if (hasResult) {
            cleanScreen(e);
            hasResult = false;
        }
        // Show the clicked number on the screen
        displayNumber(e);
    })
});
// Click event to decimal numbers
point.addEventListener("click", (e) => {
    // Behave like a number button: clear screen if a result is showing
    if (hasResult) {
        cleanScreen(e);
        hasResult = false;
    }
    displayNumber(e);
});
// Click event to the equal button
equalButton.addEventListener("click", () => {
    // Make the operation and set the variuable true (there's a result in the screen)
    calculator();
    hasResult = true;
});
// Click event to all the symbols (+, -, *, /)
operations.forEach(element => {
    element.addEventListener('click', (e) => {
        // Reset the result to continue building the operation
        if (hasResult) {
            hasResult = false;
        }
        // Calculate the current digits and show the new operator
        calculator();
        displayNumber(e);
    });
});
// Delete and clean functions to their respective buttons
deleteButton.addEventListener("click", deleteCharacter);
cleanButton.addEventListener("click", cleanScreen);


