import { screen } from "../variables/globalVariables.js";

// Clear the entire calculator screen
export function cleanScreen() {
    screen.value = "";
    screen.focus();
}

// Delete the last character entered on the screen (like a Backspace button)
export function deleteCharacter() {
    let oldCharacters = screen.value;
    let newArray = oldCharacters.split("");
    newArray.pop();
    let newCharacter = newArray.join("");
    screen.value = newCharacter;
    screen.focus();
}