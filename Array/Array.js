// let ar = [1,2,3,4,5]
// console.log(ar);


// with NEW Array 

// let ar = new Array(1,2,3,4)
// console.log(ar);

// -------------------------------------------------------------
// Questions:-
// ------------

// Using push() and pop():

// Question: Given an array let fruits = ["Apple", "Banana", "Cherry"];,
// Add "Orange" to the end of the array using push().
// Remove the last element from the array using pop().

// let fruits = ["Apple" , "Banana", "Cherry"]

// fruits.push("Orange") for add
// fruits.pop() for remove last one

// console.log(fruits);

// -------------------------------------------------------------

// 2) Using unshift() and shift():

// Question: You have the array let numbers = [1, 2, 3];
// Add 0 to the beginning of the array using unshift().
// Remove the first element from the array using shift().

// let numbers = [1,2,3]

// numbers.unshift(10) for add nos in start of an array and onwardss... 
// numbers.shift() for remove first element of an array 
// console.log(numbers);

// -------------------------------------------------------------
// 3) Question: Given the array let fruits = ["Apple", "Banana", "Orange"];
// Use the join() method to convert the array into a single string with elements separated by , (comma). 

// let fruits = ["Apple", "Banana", "Orange"];

// let res = fruits.join(",")
// console.log(res);
// convert array to string 
// console.log(fruits);

// -------------------------------------------------------------
// 4) Question: Given the array let fruits = ["Apple", "Banana", "Orange"];
// Use the join() method to convert the array into a single string with elements separated by , (comma).

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]

// let res = arr1.concat(arr2)
// console.log(res);

// -------------------------------------------------------------
// 5) Question: You have the array let arr = [1, 2, 3, 4, 5];.
// Use slice() to create a new array that contains the elements from index 1 to 3 (excluding index 3).

    // let arr = [1,2,3,4,5]
    // let slc = arr.slice(1,3)
    // console.log(slc);
    
// -------------------------------------------------------------
// 6) Question: You have an array of numbers let numbers = [1, 2, 3, 4];.
// Use map() to create a new array where each element is squared (e.g., 1 becomes 1, 2 becomes 4, etc.).

//   let numbers = [1,2,3,4]
//   let sqr = numbers.map(function(num){
//     return num * num
//   })
//   console.log(numbers);
//   console.log(sqr);
  
// -------------------------------------------------------------
// 7) Question: Given the array let fruits = ["Apple", "Banana", "Cherry", "Date"];,
// Use splice() to remove the second and third elements from the array, and add "Mango" in their place.

    // let fruits = ["Apple", "Banana", "Cherry", "Date"];
    // fruits.splice(1,2, "Mango")
    // console.log(fruits);
    
// -------------------------------------------------------------
// 8) You have the array let numbers = [1, 2, 3, 4, 5, 6];.
// Use filter() to create a new array that only contains the even numbers from the original array.

    // let arr = [1,2,3,4,5]
    // let even = arr.filter(num => num % 2 == 0)
    // console.log(even);
    
// -------------------------------------------------------------
// 9) You have an array of strings let fruits = ["Banana", "Apple", "Cherry", "Mango"];.
// Use map() to convert each fruit name to uppercase.
// Then use sort() to sort the fruits in alphabetical order.

// let fruit = ["Banana", "Apple", "Cherry", "Mango"]
// let res = fruit.map(fruit => fruit.toUpperCase()).sort()
// console.log(res);

// -------------------------------------------------------------