import { cleanScreen, deleteCharacter } from "./modules/functions/cleanInput.js";
import { displayNumber } from "./modules/functions/getNumbers.js";
import { calculator } from "./modules/functions/calculator.js";

let result = false;

let deleteButton = document.getElementById("deleteButton");
let cleanButton = document.getElementById('cleanButton');

let equalButton = document.getElementById('equal');
let point = document.getElementById('point')

let numbers = document.querySelectorAll('.number');
let operations = document.querySelectorAll('.operation')

numbers.forEach(element => {
    console.log(result);
    element.addEventListener('click', (e) => {
        if (result) {
            cleanScreen(e);
            result = false;
        }
        displayNumber(e);
    })
});
point.addEventListener("click", displayNumber);

deleteButton.addEventListener("click", deleteCharacter);
cleanButton.addEventListener("click", cleanScreen);

equalButton.addEventListener("click", () => {
    calculator();
    result = true;
});

operations.forEach(element => {
    element.addEventListener('click', (e) => {
        if (result) {
            result = false;
        }
        calculator();
        displayNumber(e);
    });
});
        


