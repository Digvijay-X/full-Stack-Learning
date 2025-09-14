// Primitive Data Types
let name = "Digvijay";       // String
let age = 22;                // Number
let isDeveloper = true;      // Boolean
let notAssigned;             // Undefined
let emptyValue = null;       // Null
let bigNumber = 123456789012345678901234567890n; // BigInt
let uniqueId = Symbol("id"); // Symbol

console.log(typeof name);        
console.log(typeof age);         
console.log(typeof isDeveloper); 
console.log(typeof notAssigned); 
console.log(typeof emptyValue);  
console.log(typeof bigNumber);   
console.log(typeof uniqueId);    

// Non-Primitive Data Types
let student = {                 
  name: "Digvijay",
  age: 22,
  course: "MCA"
};

let skills = ["HTML", "CSS", "JavaScript"]; 

function greet() {              
  return "Hello, welcome!";
}

console.log(student.name);  
console.log(skills[1]);     
console.log(greet());       
