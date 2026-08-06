import { screen } from "../variables/globalVariables.js"
let result = '';
let numberLeft = "";
let numberRight = "";
let symbols = ["+", "–", "x", "/"];
let symbolChoosen = "";

export function calculator() {
    separateCharacters();
    recognizeSymbol();
}

function separateCharacters() {
    const allCharacters = screen.value;
    let newArray = allCharacters.split("");
    newArray.forEach(element => {
        symbols.forEach(symbol => {
            if (element == symbol) {
                let symbolIndex = newArray.indexOf(element);
                numberLeft = newArray.slice(0, (symbolIndex)).join("");
                numberRight = newArray.slice(symbolIndex+1).join("");
                symbolChoosen = symbol;
            }
        });
    });
}

function recognizeSymbol() {
    if (symbolChoosen == '+') {
        result = Number(numberLeft) + Number(numberRight);
    } else if (symbolChoosen == '–') {
        result = Number(numberLeft) - Number(numberRight);
    } else if (symbolChoosen == 'x') {
        result = Number(numberLeft) * Number(numberRight);
    } else {
        result = Number(numberLeft) / Number(numberRight);
    };
    screen.value = result;
}