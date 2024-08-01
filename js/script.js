'use strict';

const operandA = Number(prompt('Enter operand A'))
const operandB = Number(prompt('Enter operand B'))

const add = operandA + operandB
const sub = operandA - operandB
const mul = operandA * operandB
const div = operandA / operandB

console.log(`Результат: ${operandA} + ${operandB} = ${add}`)
console.log(`Результат: ${operandA} + ${operandB} = ${sub}`)
console.log(`Результат: ${operandA} + ${operandB} = ${mul}`)
console.log(`Результат: ${operandA} + ${operandB} = ${div}`)