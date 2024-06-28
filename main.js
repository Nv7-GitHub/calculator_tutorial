let number_r = 0;
let number_l = 0;
let operator = null;

function handleNumber(num) {
    if (operator == null) {
        number_l = number_l * 10 + num;
        document.getElementById("label").value = number_l;
    } else {
        number_r = number_r * 10 + num;
        document.getElementById("label").value = number_l + " " + operator + " " + number_r;
    }
}

function handleOperator(op) {
    operator = op;
    document.getElementById("label").value = number_l + " " + operator + " " + number_r;
}

function clearCalculator() {
    number_r = 0;
    number_l = 0;
    operator = null;
    document.getElementById("label").value = "0";
}

function negativeSign() {
    if (operator == null) {
        number_l = -number_l;
        document.getElementById("label").value = number_l;
    } else {
        number_r = -number_r;
        document.getElementById("label").value = number_l + " " + operator + " " + number_r;
    }
}

function calculate() {
    switch (operator) {
        case "+":
            number_l += number_r;
            break;
        case "-":
            number_l -= number_r;
            break;
        case "*":
            number_l *= number_r;
            break;
        case "/":
            number_l /= number_r;
            break;
    }
    operator = null;
    number_r = 0;
    document.getElementById("label").value = number_l;
}