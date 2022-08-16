function addOne() {
    let numberValue = document.getElementById("number").innerHTML;
    numberValue++;

    document.getElementById("number").innerHTML = numberValue;
}

function reset() {
    numberValue = 0;

    document.getElementById("number").innerHTML = numberValue;

}

function changeBackgroundColor(element){
    element.style.backgroundColor = "yellow";
}

const numberButton = document.querySelectorAll("[data-number]");
const operationButton = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const clearCurrentButton = document.querySelector("[data-clearCurrent]");
const clearAllButton = document.querySelector("[data-clearAll]");
const deleteButton = document.querySelector("[data-delete]");
const prevOperand = document.querySelector("[prev-operand]");
const currentOperand = document.querySelector("[current-operand]");
let operator;

numberButton.forEach(element => element.addEventListener("click", e => {
    currentOperand.append(element.innerHTML);
}))

clearAllButton.addEventListener("click", e => {
    currentOperand.innerText = "";
    prevOperand.innerText = "";
})

clearCurrentButton.addEventListener("click", e => {
    currentOperand.innerText = "";
})

operationButton.forEach(element => element.addEventListener("click", e => {
    if (operator){
        let aux = prevOperand.innerText;
        prevOperand.innerHTML = aux.slice(0,-1);
    }
    prevOperand.append(currentOperand.innerText);
    prevOperand.append(element.innerHTML);
    currentOperand.innerText = '';
    operator = element.innerHTML;
}));

equalsButton.addEventListener("click", e => {
    let prevOperation = parseFloat(prevOperand.innerText);
    let currOperation = parseFloat(currentOperand.innerText);
    
    compute(currOperation, prevOperation, operator);
;})

function compute(curr, prev, operator){
    prevOperand.innerHTML = "";
    switch (operator) {
        case "+":
            currentOperand.innerText = curr + prev;
            break;
        case "−" :
            currentOperand.innerText = prev - curr;
            break;
        case "×" :
            currentOperand.innerText = curr * prev;
            break;
        case "÷" :
            currentOperand.innerText = prev / curr;
            break;
        default:
            currentOperand.innerText = curr;
    }
}

deleteButton.addEventListener("click", e => {
    let aux = currentOperand.innerText;
    currentOperand.innerText = aux.slice(0,-1);
})
