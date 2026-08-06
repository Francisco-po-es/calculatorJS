import { screen } from "../variables/globalVariables.js"
import { result } from "../variables/globalVariables.js";

export function showResult() {
    let numberLeft = "";
    let numberRight = "";
    let symbols = ["+", "–", "x", "/"];
    let symbolChoosen = "";
    const allCaracthers = screen.value;
    let newArray = allCaracthers.split("");
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