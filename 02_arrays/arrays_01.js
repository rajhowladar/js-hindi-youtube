//

const myArr = [0,1,2,3,4,5, true , "raj"]

// arrays methods
// concat() , copyWtihin() , every() , filter() , flatMap() , forEach() , indexOf(), lastIndexOf(),
// map() , reduce() , reduceRight() , reverse() , slice() , some() , sort() , solice()

// entries() , fill() , find() , findIndex() , findLast() , findLastIndex() , group() ,

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[0]);

myArr2.push(6)
console.log(myArr2);
myArr2.push(7)
console.log(myArr2);
myArr2.pop()
console.log(myArr2);

myArr2.unshift(9)       // same shift() remove first index
// console.log(myArr2);

// console.log(myArr2.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr2.join()

console.log(myArr2);
console.log(newArr);
console.log(typeof newArr);


// slice , splice

console.log("A", myArr2);

const myn1 = myArr2.slice(1,3)

console.log(myn1);
console.log("B", myArr2);

const myn2 =myArr.splice(1,3)
console.log("C" , myArr2);
console.log(myn2);
