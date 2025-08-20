// /*Object-Oriented Programming (OOP) is a programming paradigm that organizes code around objects rather than functions.
// Objects represent real-world entities (like a Car, Person, Bank Account), and they combine data (attributes) and behaviors (methods).
// 2. Classes & Objects
// Class: A blueprint or template for creating objects.
// Object: An instance of a class (created from the blueprint)*/

// // Defining a class
// class Car {
//   // Constructor is called when creating a new object
//   constructor(brand, model) {
//     this.brand = brand; // attribute/field
//     this.model = model; // attribute/field
//   }

//   // Method (behavior)
//   drive
//     console.log(`${this.brand} ${this.model} is driving...`);
//   }
// }

// Creating objects (instances)

// Correct
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}
const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Tesla", "Model 3");

car1.drive(); // Toyota Corolla is driving...
car2.drive(); // Tesla Model 3 is driving...() {
console.log( new car)



// /*Attributes (Fields)
// Attributes (or fields) represent properties of an object.
// In JavaScript classes, attributes are usually defined in the constructor with this*/

// class Person {
//   constructor(name, age) {
//     this.name = name; // attribute
//     this.age = age;   // attribute
//   }
// }
// const person1 = new Person("Alice", 25);
// console.log(person1.name); // Alice

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {  // method
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }

// const person2 = new Person("Bob", 30);
// person2.greet(); // Hello, my name is Bob and I am 30 years old.



// /*Methods (Behaviors)
// Methods are functions inside a class that define what an object can do*/

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {  // method
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }

// const Person2 = new Person("Bob", 30); 
// Person2.greet(); // Hello, my name is Bob and I am 30 years old.


/*Encapsulation
Encapsulation means bundling attributes (data) and methods (behavior) together, and restricting direct access to some parts of the object.
In JavaScript:
We can use # (private fields) to hide properties so they can only be accessed inside the class.
Public methods are provided to interact with private fields safely*/


// class BankAccount {
//   // private field
//   #balance;

//   constructor(owner, balance) {
//     this.owner = owner;
//     this.#balance = balance; // private
//   }

//   // Public method to get balance safely
//   getBalance() {
//     return this.#balance;
//   }

//   // Public method to deposit money safely
//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//       console.log(`Deposited ${amount}. New balance = ${this.#balance}`);
//     } else {
//       console.log("Invalid deposit amount.");
//     }
//   }
// }

// const account = new BankAccount("Alice", 1000);
// console.log(account.getBalance()); // 1000
// account.deposit(500);              // Deposited 500. New balance = 1500
// // console.log(account.#balance);  ❌ Error: private field
