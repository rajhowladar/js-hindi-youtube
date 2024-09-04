// console.log(2>1);    // output true
// console.log(2>=1);    // true
// console.log(2<1);     // false
// console.log(2==1);    // false
// console.log(2 != 1);  // true

// regular comaparision out is boolean 

// comparision between two diffrent data types conversion 

// console.log("2" > 1); // automatic converts 2 as number type
// console.log("02" > 1); // sometimes not get valid result  thats why output is true


// console.log(null>0);   // output : false
// console.log(null == 0);  // false
// console.log(null >=0);   // true

// here equality check == and comparisons > < >= <=
// works diffrently 
// comparisions convert null to a number , treating it as 0 ,
// thats why null >= 0 is true and null>0 is false

// console.log(undefined ==0);
// console.log(undefined>0);
// console.log(undefined <0);  
// return false for all comparisons

// strictly conversions

console.log("2" ===2); // checks strictly the datatypes of both
