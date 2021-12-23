
// +
function add(number1, number2) {
    return number1 + number2
}

function subtract(number1, number2){
    return number1 - number2
}

function multiply(number1, number2){
    return number1 * number2
}

function divide(number1, number2){
    if (number2 === 0) {
        return "division by zero!"
    } else {
        return number1 / number2

    }
}

function increment(n){
    return ++n
}

function decrement(n){
    return --n
}

function  makeInt(n) {
    return parseInt(n, 10)
}

function preserveDecimal(n) {
    return parseFloat(n)
}