console.log('hello world!');
console.log('hello world');
console.log('web site');

let firstname= "asma";
let lastname="b";
let fullname = firstname.concat(lastname); 
console.log(fullname);

console.log(` ${firstname} ${lastname} `);
let sentence = "look to the space";
console.log(sentence.toUpperCase());

let message = "There is no war in Ba Sing Se";

// Challenge One
function challengeOne() {
  let wordCount = message.split(' ').length;
  console.log(`The message contains ${wordCount} words.`);
}

challengeOne();

let countries = ['China','Japan','South Korea','Vietnam','Malaysia'];
let capital = ['Beijing','Tokyo','Seoul','Hanoï','Kuala Lumpur'];

// Challenge Two
function challengeTwo() {
  for (let i = 0; i < countries.length; i++) {
    console.log(`Your country: ${countries[i]} has the capital named: ${capital[i]}.`);
  }
}

challengeTwo();

// Challenge Three
let randomizer = Math.floor(Math.random() * 4);

function challengeThree() {
  switch (randomizer) {
    case 0:
      console.log("Your fate is a certain victory");
      break;
    case 1:
      console.log("Your fate is not so certain victory");
      break;
    case 2:
      console.log("Your fate is an uneasy victory");
      break;
    default:
      console.log("Your fate is unclear, ô chosen undead");
  }
}

challengeThree();

// Challenge Four
function checkSeason(month) {
    if (month < 1 || month > 12) {
      return "Invalid month";
    }
  
    if (month >= 3 && month <= 5) {
      return "Spring";
    } else if (month >= 6 && month <= 8) {
      return "Summer";
    } else if (month >= 9 && month <= 11) {
      return "Autumn";
    } else {
      return "Winter";
    }
  }
  
  let currentMonth = 7; // Change this to the current month
  console.log(`You are in ${checkSeason(currentMonth)}.`);