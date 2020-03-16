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