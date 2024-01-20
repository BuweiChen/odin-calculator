const display = document.querySelector("#display");
const numberButtons = [...document.querySelectorAll(".number")];
const addButton = document.querySelector("#add");
const subButton = document.querySelector("#subtract");
const divButton = document.querySelector("#divide");
const multButton = document.querySelector("#multiply");
const eqButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");

let displayNumber = "";
let calculationResult = 0;
let lastOperation = "add";
let eraseOnNextNumber = false;

for (let bButton of numberButtons) {
    bButton.addEventListener("click", () => {
        
        if (eraseOnNextNumber) {
            displayNumber = bButton.getAttribute("data-value");
            eraseOnNextNumber = false;
        } else {
            displayNumber += bButton.getAttribute("data-value");
        }
        display.textContent = displayNumber;
    });
}

addButton.addEventListener("click", operationButtonFunction);
subButton.addEventListener("click", operationButtonFunction);
multButton.addEventListener("click", operationButtonFunction);
divButton.addEventListener("click", operationButtonFunction);
eqButton.addEventListener("click", () => {
    const n1 = calculationResult;
    const n2 = Number(displayNumber);
    switch (lastOperation) {
        case "add":
            calculationResult = add(n1, n2);
            break;
        case "subtract":
            calculationResult = subtract(n1, n2);
            break;
        case "multiply":
            calculationResult = multiply(n1, n2);
            break;
        case "divide":
            if (n2 == 0) {
                alert("you tryna break something here? (divide by 0 error)");
                clear();
                return;
            }
            calculationResult = divide(n1, n2);
            break;
        default:
            break;
    }
    displayNumber = String(calculationResult);
    display.textContent = displayNumber;
    calculationResult = 0;
    lastOperation = e.target.getAttribute("id");
    eraseOnNextNumber = true;
});
clearButton.addEventListener("click", clear);

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

function operationButtonFunction(e) {
    const n1 = calculationResult;
    const n2 = Number(displayNumber);
    switch (lastOperation) {
        case "add":
            calculationResult = add(n1, n2);
            break;
        case "subtract":
            calculationResult = subtract(n1, n2);
            break;
        case "multiply":
            calculationResult = multiply(n1, n2);
            break;
        case "divide":
            if (n2 == 0) {
                alert("you tryna break something here? (divide by 0 error)");
                clear();
                return;
            }
            calculationResult = divide(n1, n2);
            break;
        default:
            break;
    }
    displayNumber = String(calculationResult);
    display.textContent = displayNumber;
    lastOperation = e.target.getAttribute("id");
    eraseOnNextNumber = true;
}

function clear() {
    displayNumber = "0";
    calculationResult = 0;
    display.textContent = displayNumber;
    lastOperation = "add";
    eraseOnNextNumber = true;
}