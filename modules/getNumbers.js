import {screen} from "./cleanInput.js"

export function displayNumber(numberSelected) {
    screen.value += numberSelected.target.textContent;
}