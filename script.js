function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

let num1 = 0;
let num2 = 0;
let operator = '+';

function operate(num1, num2, operator) {
  if (operator === "+") {
    add(num1, num2);
  } else if (operator === "-") {
    subtract(num1, num2);
  } else if (operator === "/") {
    divide(num1, num2);
  } else if (operator === "x") {
    divide(num1, num2);
  } else
    return;
}

const buttons = document.querySelectorAll(".digit")
buttons.forEach(function(i){
  i.addEventListener('click', function(){
  	let number = document.querySelector('#display-items');
    let number1 = i.innerHTML;
    let number2 = number.innerHTML;
    number.innerHTML = number2 + number1;
  })
})  

const clear = document.getElementById('clear-button');
const display = document.getElementById("display-items");

clear.addEventListener('click', function(){
	display.innerHTML = " ";
})
