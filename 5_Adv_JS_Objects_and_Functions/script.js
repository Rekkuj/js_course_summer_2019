/*
 * Inheritance
 */

// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};*/

/*// Function constructors start with capital letters
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
        // this.calcAge = function() {
        //     console.log(2019 - this.yearOfBirth);
    // }
}

// The method is not in the constructor, but we can use it, because it's in the prototype property of the Person
Person.prototype.calcAge = function() {
    console.log(2019 - this.yearOfBirth);
};

// we can also add properties, though it's not really common
Person.prototype.lastName = 'Smith'; // will be inherited by all

// instantiation
var john = new Person('John', 1990, 'teacher');
/!* When we use the new operator, a brand new EMPTY object is created. Then the constructor function (in this case 'Person') is called with the arguments specified *!/
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calcAge();
jane.calcAge();
mark.calcAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);*/

/* Creating Objects: Object.create
* The difference between Object.create and the function constructor pattern is that Object.create builds an object that inherits directly from the one that we passed into the first argument while
*/
/*

var personProto = {
    calcAge: function() {
        console.log(2019 - yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});
*/

// Primitives vs. objects

var a = 23;
var b = a;
a= 46;
console.log(a); // 46
console.log(b); // 23

var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); // 30
console.log(obj2.age); // 30 because





























