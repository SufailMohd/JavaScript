// SLICE 
// -----

// const str = "Hello World"
// console.log(str.slice(0,5))

// REPLACE 

// let str = "Hello! World"
// console.log(str.replace("World", "SLX"));


// 1) Write a function that takes a string and returns the first 4 characters of the string.

// function getFirstFourChars(str) {
//     return str.slice(0,4)
//   }
  
//   console.log(getFirstFourChars("JavaScript"));  // Expected output: "Java"

// 2) Write a function that takes a string and returns a substring that excludes the first 3 and the last 2 characters.

// function sliceString(str) {
//     return str.substring(2,6)
//   }
  
//   console.log(sliceString("JavaScript"));  // Expected output: "vaSc"
  

// 3) Write a function that takes a string and a number n. The function should return the last n characters of the string, but if n is greater than the length of the string, it should return the entire string.

// function getLastNChars(str, n) {
//     if(n >= str.length){
//         return str
//     }
//     return str.slice(-n)
//   }
  
//   console.log(getLastNChars("JavaScript", 4));  // Expected output: "ript"
//   console.log(getLastNChars("Java", 10));  // Expected output: "Java"