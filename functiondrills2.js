'use strict';
function jediName(firstName, lastName) {
  return `${lastName.slice(0,3)}${firstName.slice(0,2)}`;
}

console.log(jediName('Beyonce', 'Knowles'));

function beyond(num) {
  if(isFinite(num) === false) {
    console.log('and beyond');
  }
  if(num > 0 && isFinite(num)) {
    console.log('To infinity');
  }
  if(num < 0 && isFinite(num)) {
    console.log('To Negative Infinity');
  }
  if(num === 0) {
    console.log('Staying home');
  }
}

beyond(50);

function decode(sentence) {
  let words = sentence.split(' ');
  let decodedWord = '';
  for (let i = 0; i < words.length; i++) {
      if (words[i][0] === 'a') {
        decodedWord += words[i][1];
      } else if (words[i][0] === 'b') {
        decodedWord += words[i][2];
      } else if (words[i][0] === 'c') {
        decodedWord += words[i][3];
      } else if (words[i][0] === 'd') {
        decodedWord += words[i][4];
      } else {
        decodedWord += ' ';
      }
  }
  return decodedWord;
}

console.log(decode('craft block argon meter bells brown croon droop'));