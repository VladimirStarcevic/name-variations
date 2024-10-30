import { getNumberOfChars, getFirstChar, getLastChar, getLower, getUpper, getCapitalized } from "./variations.js";

// Određujemo funkciju koja će analizirati unos
function analyzeInput() {
    const nameInput = document.querySelector("#your-name");
    const value = nameInput.value.trim();

    document.querySelector("#answer1").textContent = getNumberOfChars(value);
    document.querySelector("#answer2").textContent = getFirstChar(value);
    document.querySelector("#answer3").textContent = getLastChar(value);
    document.querySelector("#answer4").textContent = getLower(value);
    document.querySelector("#answer5").textContent = getUpper(value);
    document.querySelector("#answer6").textContent = value ? getCapitalized(value) : "";
}

// Dodajemo `keyup` događaj na input polje kada se fajl učita
const nameInput = document.querySelector("#your-name");
nameInput.addEventListener("keyup", analyzeInput);
