/*
algorithm 

Going to first want to define two function, one that adds and one that multiplies

Going to want to get two numbers from user using inputs and buttons

Going to want to get user's name and if they want to add or multiply using inputs and buttons

If they want to add, add and if they want to multiply, mutply 

Use label to print result 

Add button to clear display

*/


// Going to first want to define two function, one that adds and one that multiplies
function add(num1, num2,) {
   answer = (num1 + num2) 
  return answer
}

// Going to want to get two numbers from user using inputs and buttons
function multiply(num1, num2,) {
   answer = (num1 * num2) 
  return answer
}
let number1 = " "
btnOne.onclick=function(){
  number1 = parseInt(inptOne.value)
}

let number2 = " "
btnTwo.onclick=function(){
  number2 = parseInt(inptTwo.value)
}


// Going to want to get user's name and if they want to add or multiply using inputs and buttons

let name = " "
btnName.onclick=function(){
  name = inptName.value
}


// If they want to add, add and if they want to multiply, mutply 

let addOrMultiply = " "
let newAnswer = " "
btnMath.onclick=function(){
  addOrMultiply = inptMath.value
if(addOrMultiply == "add") {
 newAnswer = add(number1, number2)
} else {
 newAnswer = multiply(number1, number2)
}

lblResult.value = `${name} the anwser was ${newAnswer}`
}
// Use label to print result 




// Clear display
clear.onclick=function(){
  lblResult.value = " "
}
