const numberButtons = [...document.querySelectorAll("buttons .number")];
const addButton = document.querySelector("#add");
const subButton = document.querySelector("#subtract");
const divButton = document.querySelector("#divide");
const multButton = document.querySelector("#multiply");
const eqButton = document.querySelector("#equal");



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