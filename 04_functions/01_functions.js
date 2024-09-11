// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);         // result for this is undefined
// }


function addTwoNumbers(number1, number2){
    // let result = number1+number2
    // return result
    return number1 + number2           // when we use return the only we can store value in varible can't with console.log
}
const result = addTwoNumbers(3, 5)

// console.log("Result:", result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in `
}

// loginUserMessage("raj");   // we need to print this statement
 console.log(loginUserMessage("raj"));
console.log(loginUserMessage());    // when no value passed the result is undefined
