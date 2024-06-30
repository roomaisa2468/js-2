//  First number
//  Second number
// Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

let firstNumber = prompt("Enter the first number:");
firstNumber = +firstNumber;
let secondNumber = prompt("Enter the second number:");
secondNumber = +secondNumber;
let operation = prompt("Enter the operation (+, -, *, /, %):");
let result;
if (operation === '+') {
    result = firstNumber + secondNumber;
} else if (operation === '-') {
    result = firstNumber - secondNumber;
} else if (operation === '*') {
    result = firstNumber * secondNumber;
} else if (operation === '/') {
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
    } else {
        result = "Division by zero is not allowed.";
    }
} else if (operation === '%') {
    result = firstNumber % secondNumber;
} else {
    result = "Invalid operation.";
}
 alert("The result of " + firstNumber + " " + operation + " " + secondNumber + " is: " + result);

