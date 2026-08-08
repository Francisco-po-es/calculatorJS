import { screen } from "../variables/globalVariables.js"
import { displayNumber } from "./getNumbers.js";

export function calculator() {
    let characters = separateCharacters();
    console.log(characters.numberLeft)
    console.log(characters.numberRight)
    console.log(characters.symbolChoosen)
    console.log(characters.thereIsSymbol)
    if (characters.thereIsSymbol) {
        makingOperation(characters);
    }
}

function separateCharacters() {
    let symbolIndex = '';
    let numberLeft = '';
    let numberRight = '';
    let symbolChoosen = '';
    let symbols = ["+", "–", "x", "/"];
    const allCharacters = screen.value;
    let thereIsSymbol = false;
    let newArray = allCharacters.split("");
    newArray.forEach(element => {
        symbols.forEach(symbol => {
            if (element == symbol) {
                symbolIndex = newArray.indexOf(element);
                numberLeft = newArray.slice(0, (symbolIndex)).join("");
                numberRight = newArray.slice(symbolIndex+1).join("");
                symbolChoosen = symbol;
                thereIsSymbol = true;
            }
        });
    });
    return {numberLeft, numberRight, symbolChoosen, thereIsSymbol};
}

function makingOperation(character) {
    let result = '';
    if (character.symbolChoosen == '+') {
        result = Number(character.numberLeft) + Number(character.numberRight);
    } else if (character.symbolChoosen == '–') {
        result = Number(character.numberLeft) - Number(character.numberRight);
    } else if (character.symbolChoosen == 'x') {
        result = Number(character.numberLeft) * Number(character.numberRight);
    } else if (character.symbolChoosen == '/') {
        result = Number(character.numberLeft) / Number(character.numberRight);
    };
    screen.value = result;
}