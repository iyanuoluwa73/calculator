let firstNum = prompt("Enter your first number");
let secondNum = prompt("Enter your second number");
let operation = prompt("Enter the operation you want to perform (*, +, -, /)");
let result;

if (operation == "*") {
    result = firstNum * secondNum;
} else if (operation == "+") {
    result = parseInt(firstNum) + parseInt(secondNum);
} else if (operation == "-") {
    result = firstNum - secondNum;
} else if (operation == "/") {
    result = firstNum / secondNum;
} else {
    alert("Invalid operator")
}

alert("Your first number " + operation +" your second number is " + result);