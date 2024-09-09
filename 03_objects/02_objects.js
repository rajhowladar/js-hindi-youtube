// const tinderUser = new Object()

// // const tinderUser = {}   // we can also define object like this

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com" ,
//     fullname: {
//         user_fullname: {
//             firstname: "raj",
//             lastname: "howladar"
//         }
//     }
// }
// console.log(regularUser.fullname.user_fullname.firstname);

// // merge objects

// const obj1 ={
//     1:"a",
//     2:"b"
// }

// const obj2 ={
//     3:"a",
//     4:"b"
// }

// // const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1 , obj2)    // target and source
// console.log(obj3);


// const users = [

//     {
//         id:1,
//         email: "ra@gmail.com"
//     },
//     {
//         id: 1,
//         email: "rajh@gmail.com"
//     }
// ]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


 const course = {
       coursename: "js in hindi",
      courseInstructor: "hitesh",
      price: "999",
 }

// course.courseInstructor

const{courseInstructor : instructor} = course
console.log(courseInstructor);
console.log(instructor);

const navbar = () => {

}

navbar(compamy = "hitesh")