const name = "Raj-raj"

const gitRepo = 10

// console.log(name + gitRepo + "value"); // outdated method

// latest method
// console.log(`Hello my name is ${name} and my repo count is ${gitRepo}`);

// other name to decalre string
const gameName = new String('Raj-raj')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0,3)
// console.log(newString);

// const anotherString = gameName.slice(-7,3) // slicing use negative indexing from backwards
// console.log(anotherString);


// const newStringOne = "         Raj       1"
// console.log(newString);
// console.log(newString.trim()); // works on only whitespaces

const url = " https://raj.com/raj%20howladar"  // url encoding %20 replace any whitespaces in url , like raj howladar as raj%20howladar

console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));