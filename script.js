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
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  } else if (operator === "x") {
    return multiply(num1, num2);
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

const operatorButtons = document.querySelectorAll(".operator-button")
operatorButtons.forEach(function(i){
  i.addEventListener('click', function(){
  	let number = document.querySelector('#display-items');
    num1 = number.innerHTML;
    console.log(num1);
    let number1 = i.innerHTML;
    let number2 = number.innerHTML;
    number.innerHTML = number2 + " "+ number1 + " ";
    operator = i.innerHTML;
    console.log(operator);
  })
})  

const clear = document.getElementById('clear-button');
const display = document.getElementById("display-items");

clear.addEventListener('click', function(){
	display.innerHTML = "";
  num1 = 0;
  num2 = 0;
  operator = "";
  console.log(num1);
  console.log(num2);
})

function getLastNumber(string){
  let split_string = string.split(" ");
  let last_element = split_string[2];
  return last_element;
}

const equals = document.getElementById("equals");
equals.addEventListener('click', function(){
  let number = document.querySelector("#display-items");
  num2 = getLastNumber(number.innerHTML);
  console.log(num2);
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  console.log(num2);
  let equals_operate = operate(num1, num2, operator);
  console.log(equals_operate);
  let display_new = document.getElementById("display-items");
  display_new.innerHTML = equals_operate;
})
