// let test = {
//     name: "Slx",
//     age: 19
// }

// console.log(test['name']);
// console.log(test); for full
// console.log(test.name);

// -------------------------------------------------------------
// Questions:-
// ------------

// 1) Create an object called book that contains the following properties: title (a string), author (a string), and year (a number). Log the object to the console.

    // let book = {
        //     title: "SpaceX",
        //     author: "Elon Musk",
        //     year: 2025
        // }    
        
        // console.log(book);
    
        
// 2) Given an object person with properties firstName, lastName, and age, write code to update the age property and add a new property address with the value "123 Main St". Then, log the updated person object.

// let me = {
    //     name: "SLX",
    //     age: 18
    // }  
    
    // me.name = "Slx"
    // me.age = 19
    
    // console.log(me);
    
    // 3) You have an object car with properties made, model, year, and mileage. Write a method called getCarInfo() that returns a string like "This is a 2020 Toyota Corolla with 15000 miles." Use the this keyword to refer to the object properties inside the method.
    
    //     let car = {
        
    //         made: "BMW",
    //         model: "M3",
    //         year: 2026,
    //         mileage : 15,
    
    //         //method
    //         getCarInfo : function(){
        //             return `this car made by ${this.made}
        // model ${this.model} launch year ${this.year} expect mileage avg or more than ${this.mileage}`
        //         }
        //     }
        
        //     console.log(car.getCarInfo());
        
// -------------------------------------------------------------


// Accessing and Modifying object properties

// 1) Dot Notion 

// let obj = {
//         name: "Slx",
//         age: 19
//     }
//         console.log(obj.name);
    
    // 2) Bracket Notation
    
    // let obj = {
    //     name: "Slx",
    //     "Fav Car" : "BMW",
    //     age: 19
    // }
    // console.log(obj["Fav Car"]);


//HOW TO ADD 

// 1) let obj = {
//             name: "Slx",
//             age: 19
//         }
       //  obj.car = "BMW" 

       // console.log(obj);
       
// 2 
   
//       let obj = { 

//       name: "Slx",
//       age: 19
//   }

//   obj['car'] = "BMW"
//   console.log(obj);
  
    
    
// -------------------------------------------------------------
//How To DELETE 

// Deleting Object Properties
// You can remove properties from an object using the delete operator.

// Example:

// javascript
// Copy
// let person = {
//     name: 'Alice',
//     age: 30,
//     isStudent: false
// };

// // Delete the 'isStudent' property
// delete person.isStudent;

// console.log(person);  // Output: { name: 'Alice', age: 30 }
    