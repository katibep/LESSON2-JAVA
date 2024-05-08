const arithmeticOperation = prompt("enter the arithmetic operation u want to perform : addition,subtraction,multiplication,division and modulus")
function evalNumbers(){
if (arithmeticOperation.toLocaleLowerCase()== "addition"){
    const firstNumber=prompt("enter firstNumber")
    const numberOne=parseInt(firstNumber)
    const secondNumber=prompt("enter secondNumber")
    const numberTwo=parseInt(secondNumber)
    const result= numberOne + numberTwo
    alert(`the answer after adding ${numberOne} and ${numberTwo} is ${result}`)
}
else if(arithmeticOperation.toLocaleLowerCase()== "subtraction"){
    const firstNumber=prompt("enter firstNumber")
    const numberOne=parseInt(firstNumber)
    const secondNumber=prompt("enter secondNumber")
    const numberTwo=parseInt(secondNumber)
    const result= numberOne - numberTwo
    alert(`the answer after subtracting ${numberOne} and ${numberTwo} is ${result}`)
}
else if (arithmeticOperation.toLocaleLowerCase()== "multiplication"){
    const firstNumber=prompt("enter firstNumber")
    const numberOne=parseInt(firstNumber)
    const secondNumber=prompt("enter secondNumber")
    const numberTwo=parseInt(secondNumber)
    const result= numberOne * numberTwo
    alert(`the answer after multiplying ${numberOne} and ${numberTwo} is ${result}`)
}
else if (arithmeticOperation.toLocaleLowerCase()== "division"){
    const firstNumber=prompt("enter firstNumber")
    const numberOne=parseInt(firstNumber)
    const secondNumber=prompt("enter secondNumber")
    const numberTwo=parseInt(secondNumber)
    const result= numberOne / numberTwo
    alert(`the answer after dividing ${numberOne} and ${numberTwo} is ${result}`)
}
else if (arithmeticOperation.toLocaleLowerCase()== "modulus"){
    const firstNumber=prompt("enter firstNumber")
    const numberOne=parseInt(firstNumber)
    const secondNumber=prompt("enter secondNumber")
    const numberTwo=parseInt(secondNumber)
    const result= numberOne % numberTwo
    alert(`the remainder of ${numberOne} and ${numberTwo} is ${result}`)
}
else {
    alert("invalid operation")
}
}
evalNumbers()
