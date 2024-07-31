'use strict';

const operandA = Number(prompt('Enter operand A'))
const operandB = Number(prompt('Enter operand B'))

let add = operandA + operandB
let sub = operandA - operandB
let mul = operandA * operandB
let div = operandA / operandB

console.log(`Результат: ${operandA} + ${operandB} = ${add}`)
console.log(`Результат: ${operandA} + ${operandB} = ${sub}`)
console.log(`Результат: ${operandA} + ${operandB} = ${mul}`)
console.log(`Результат: ${operandA} + ${operandB} = ${div}`)