'use strict';

function yearOfBirth(age) {
    if (age < 0) {
        throw new Error('Age can not be negative');
    } else {const yob = 2020 - age;
    return yob;
    }
}

function createGreeting(name, age) {
    return `Hi my name is ${name}, I\'m ${age} years old, and I was born in year ${yearOfBirth}`;
}

try {
    const greeting1 = createGreeting();
    console.log(greeting1);
} catch (Error) {
    console.log(Error);
};
