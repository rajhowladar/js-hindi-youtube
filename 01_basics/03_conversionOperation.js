//  for value like 33abc     the value inside valueNumber is NaN

// let score = "33abc"

// console.log(typeof score);
// console.log(typeof(score));

// let valueNumber = Number(score)

// console.log(typeof valueNumber);
// console.log(valueNumber);


// -----------------------for value of null        the value inside is 0

// let score = null

// console.log(typeof score);
// console.log(typeof(score));

// let valueNumber = Number(score)

// console.log(typeof valueNumber);
// console.log(valueNumber);

//------------------------- for value = udefined  the value inside is NaN

// let score = undefined

// console.log(typeof score);
// console.log(typeof(score));

// let valueNumber = Number(score)

// console.log(typeof valueNumber);
// console.log(valueNumber);


//-------------------for boolean value = true the value inside is 1 for false 0

// let score = true

// console.log(typeof score);
// console.log(typeof(score));

// let valueNumber = Number(score)

// console.log(typeof valueNumber);
// console.log(valueNumber);

// -----------------------for boolean type conversion of integer number 1
//                        for any kind of number or string value is true or false for empty
//                         string or 0 value

let loggedIn = 1  // true for 1        // false for empty string " "

let booleanValue = Boolean(loggedIn)
console.log(booleanValue);