// Array destructuring 
// --------------------

// const arr1 = [1,2,3]
// const arr2 = [4,5,6]

// const [a,b,c] = arr1
// const [e,f,g] = arr2
// console.log(a);

// Object destructuring 
// --------------------

//    const obj = {
//     name : "slx",
//     age: 19,
//     stack: "MERN"
//    }

//    const {name, age,...rest} = obj

//    console.log(name);
   

// REST
// ------

// const [a, ...rest] = [1,2,3]
// console.log(a);
// console.log(rest);

//    const arr = [1,2,3,4,5]
//    const [a,b,c,... rest] = arr
//    console.log();
   

// SPREAD 
// -------

// const arr1 = [1,2,3]
// const arr2 = [...arr1, 4,5]

// console.log(arr2);

// -----------------------

    // const arr = [1,2,3]
    // const arr2 = [4,5,6]
    // const spr = [...arr, ...arr2]
    // console.log(spr);
    
// --------------------------------------------------
// Questions:-
// ------------
// SPREAD 
// ------

// 1) What will be the output of the following code?

    // const arr1 = [1,2,3]
    // const arr2 = [...arr1]
    // arr2.push(4)
    // console.log(arr2);
    
// 2) How can you use the spread operator to merge two objects, obj1 and obj2, where obj2 has a property that should overwrite the same property in obj1?

    // const obj1 = {a:1, b:2, c:3}
    // const obj2 = {a:2, b:3, d:4}
    // const merge = {...obj1, ...obj2}
    // console.log(merge);
     
// 3) Can you use the spread operator to create a deep copy of a nested object (i.e., copying both the outer object and inner objects)? If not, explain why, and show an alternative.
    
    // const obj = {
    //     a:1,
    //     b:{
    //         x: 99, y:100
    //     }
    // }

    // const obj2 = {...obj}
    // obj.b.x = 100
    // console.log(obj2);
    
// REST 
// ----

// 1) What will be the value of rest after the following code?
     
        //    const arr = [1, 2, 3, 4, 5];
        //    const [first, second, ...rest] = arr;
        //    console.log(rest);

// 2) How can you use the rest operator to collect function arguments into an array?

//    function multiply(...numbers){
//     return numbers.reduce((acc, current) => acc * current ,1)
//    }

//    console.log(multiply(2,3,4));

// 3) Given the following object, use the rest operator to separate the name property and collect the rest of the properties into a new object
   
        // const person = { name: 'Alice', age: 30, country: 'USA', profession: 'Engineer' };
        // const { name, ...details } = person;
        // console.log(name);
        // console.log(details);

// ------------------------------------------------------------------------------------------------------

           

