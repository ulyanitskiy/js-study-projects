'use strict';

// 1
const name = prompt('What is your name?');
const age = prompt('What is your age?');
const likesProgramming = confirm(`${name}, do you like programming?`);

// 2
console.log(name);
console.log(age);
console.log(likesProgramming);
console.log(typeof name, typeof age, typeof likesProgramming);

// 3
const greeting = `Hello, ${name}!`;
alert(greeting);

// 4
const numericAge = Number(age);
const nextAge = numericAge + 1;

console.log(nextAge);

// 5
let isAdult;

if (age >= 18) {
    isAdult = true;
} else {
    isAdult = false;
}

console.log(isAdult);


