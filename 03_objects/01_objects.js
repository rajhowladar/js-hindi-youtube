// singleton   // constructor make single object

// object literals
//Object.create   singleton object 


const mySym = Symbol("key1")

const JsUser = {
    name : " raj", 
    "fullName" : "raj howladar" ,  // no chance to call by dot operator
    age: 18 ,
    [mySym] : "mykey1",
    email: "raj@gmail.com" ,
    location : "Raipur" , 
    isLoggedIn : false,
    lastLoginDays : ["monday", " saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["fullName"]);
console.log(JsUser[mySym])

//Object.freeze(JsUser)
JsUser.email = "howladar@raj.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user");

}
console.log(JsUser.greeting);

JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(JsUser.greetingTwo());

