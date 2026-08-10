import {screen} from "../variables/globalVariables.js"

// Keep the digits and symbols in the screen
export function displayNumber(numberSelected) {
    screen.value += numberSelected.target.textContent;
}