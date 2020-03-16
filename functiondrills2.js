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

function howManyDays(month, leapYear) {
  if(typeof month !== 'string') {
    throw new Error('Must provide a vaild month')
  }
  switch(month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      console.log(`There are 31 days in ${month}`);
      break;
    case 'February':
      if (leapYear === false)
      console.log('There are 29 days in February');
      else {
        console.log('There are 28 days in February');
      }
      break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
        console.log(`There are 30 days in ${month}`);
    
  }
}

howManyDays('February', false);

function rockPaperScissors(num) {
  const randomNo = Math.floor(Math.random()*3)+1;
  if(num > 3){
    throw new Error('Enter a number between 1 and 3')
  }
  if(num === randomNo) {
    console.log('You Tie')
  }  
  else if (num === 1 && randomNo === 3) {
    console.log('You Win')
  }  
  else if(num === 3 && randomNo === 2) {
    console.log('You Win')
  } 
  else if(num === 2 && randomNo === 1) {
    console.log('You Win')
  } 
  else if(num === 1 && randomNo === 2) {
    console.log('You Lose')
  } 
  else if(num === 2 && randomNo === 3) {
    console.log('You Lose')
  } 
}

rockPaperScissors(1);