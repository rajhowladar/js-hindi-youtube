let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
 

// let myCreateDate = new Date(2023 , 0 , 23)

// let myCreatedDate = new Date(2023, 0 , 4,5)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);  // in miliseconds
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.tolacaleString('default',{
    weekday: "long  "
})