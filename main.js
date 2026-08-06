import { cleanScreen, deleteCharacter } from "./modules/functions/cleanInput.js";
import { displayNumber } from "./modules/functions/getNumbers.js";
import { showResult } from "./modules/functions/calculator.js";

import { result } from "./modules/variables/globalVariables.js";

let deleteButton = document.getElementById("deleteButton");
let cleanButton = document.getElementById('cleanButton');
let equalButton = document.getElementById('equal')
let numbers = document.querySelectorAll('.number');
let buttons = document.querySelectorAll('button')

buttons.forEach(element => {
    if (element == deleteButton) {
        element.addEventListener("click", deleteCharacter);
    } else if (element == cleanButton) {
        element.addEventListener("click", cleanScreen);
    } else if (element == equalButton) {
        element.addEventListener("click", showResult);
    } else {
        element.addEventListener("click", displayNumber)
    }
});




