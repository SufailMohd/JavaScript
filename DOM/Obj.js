// OBJ 

// let obj = {
//     name: "Name",
//     salary: 1000000,
//     getslr: function(){
//         console.log("Salary of " + this.name + " is " + this.salary)
//     }
// }

// obj.getslr()

// CLASS 

 class cls{

    constructor(name, salary){
        this.name = name
        this.salary = salary
    }
    getslr(){
        console.log("Salary of " + this.name + " is " + this.salary)

    }
 }

  let o1 = new cls("SLX", 1000000000)
  let o2 = new cls("SLX", 2000000000)
  o1.getslr()
  console.log(o2.name);
  