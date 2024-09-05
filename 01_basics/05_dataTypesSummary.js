// Primitive     call by value
//  7 types : String, Number , Boolean, null , undefined,Symbol,BigInt



// Refrence type (non primitive)

// Array , Objects , Functions 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null

let userEmail;

const id = Symbol(123)
const anotherId = Symbol(123)

console.log(id == anotherId);

const bigNumber = 1223444455334n



// Arrays , objects , Function

const heros = ["shktiman", "nagraj", " doga"];
// we use curly braces for key value pairs
let myObj = {
    name: "raj" ,
    age : 22
}

const myFunction =  function(){
     console.log("hello raj");
}

console.log(typeof outsideTemp);
console.log(outsideTemp);
console.log(typeof myFunction); // basically type is object function

// here we conclude 
// the return type of non primitive data types are (objects)

//  https://262.ecma-international.org/5.1/#sec-11.4.3


//****************************************


// memory , threads , how value store in memory 

// stack (primitive)call by value , Heap(non-primitive) call by refrence

let myYoutubeName = "Raj tech"

let nayaWala = myYoutubeName

nayaWala = "hello raj"

console.log(myYoutubeName);
console.log(nayaWala);     // no orginal value , value of myYoutubeName not chages , copy passes

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
    
}

let userTwo = userOne   // here user one and user two pointing same memory location (call by refrence)

console.log(userOne);
console.log(userTwo);




