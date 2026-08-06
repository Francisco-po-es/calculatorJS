import {screen} from "../variables/globalVariables.js"

export function displayNumber(numberSelected) {
    screen.value += numberSelected.target.textContent;
}