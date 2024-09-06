// const score = 400

// // we can explicitly define variable as a particular Number datatype variable
// // for ex :

// // const balance = new Number(100)
// // console.log(balance);

// // console.log(balance.toString());
// // console.log(balance.toString().length); // now we can perform string operation in number
// // console.log(balance.toFixed(2));


// const otherNumber = 23.84555
// console.log(otherNumber.toPrecision(3));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-In'));

// //************************ Maths ******************

// console.log(Math);
// console.log(Math.abs(4));
// console.log(Math.round(4.344)); // Math.ceil(4,2) // math.floor

// //sqrt , pi , pow  , min(4,3,6,8)  , max 

// console.log(Math.random());  // values lies between 0 to 1 

// console.log(Math.floor(Math.random()*10)+1);  // to avoid 0 as output


// we need value lies between 10 and 20
const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max - min +1 ))+min);


