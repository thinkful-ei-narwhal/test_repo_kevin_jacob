'use strict';

function getYearOfBirth(age) {
    if (age < 0) {
        throw new Error('Age can not be negative');
    } else { const yob = 2020 - age;
    return yob;
    }
}

function createGreeting(name, age) {
    if (name === undefined || age === undefined ) {
        throw new Error ('Arguments not valid');
    } 
    if (typeof name !== 'string' || typeof age !== 'number') {
        throw new TypeError()
    }
    const yob = getYearOfBirth(age);
    return `Hi my name is ${name}, I\'m ${age} years old, and I was born in year ${yob}`;
}

try {
    const greeting1 = createGreeting('Jacob', 22);
    console.log(greeting1);
} catch(e) {
    console.error(e.message);
};
