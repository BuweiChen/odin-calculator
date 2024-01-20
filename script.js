const display = document.querySelector("#display");
const numberButtons = [...document.querySelectorAll(".number")];
const addButton = document.querySelector("#add");
const subButton = document.querySelector("#subtract");
const divButton = document.querySelector("#divide");
const multButton = document.querySelector("#multiply");
const eqButton = document.querySelector("#equal");

let displayNumber = "";

for (let bButton of numberButtons) {
    bButton.addEventListener("click", () => {
        displayNumber += bButton.getAttribute("data-value");
        display.textContent = displayNumber;
    })
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}