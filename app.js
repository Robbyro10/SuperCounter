function addOne() {
    let numberValue = document.getElementById("number").innerHTML;
    numberValue++;

    document.getElementById("number").innerHTML = numberValue;
}

function reset() {
    numberValue = 0;

    document.getElementById("number").innerHTML = numberValue;
}