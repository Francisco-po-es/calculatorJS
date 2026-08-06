import { screen } from "../variables/globalVariables.js";

export function cleanScreen() {
    screen.value = "";
    screen.focus();
}

export function deleteCharacter() {
    let oldCharacters = screen.value;
    let newArray = oldCharacters.split("");
    newArray.pop();
    let newCharacter = newArray.join("");
    screen.value = newCharacter;
    screen.focus();
}