'use strict';

function yearOfBirth(age) {
    const yob = 2020 - age;
    return yob;
}

function createGreeting(name, age) {
    return `Hi my name is ${name}, I\'m ${age} years old, and I was born in year ${yearOfBirth}`;
}

const greeting1 = createGreeting();
console.log(greeting1);

