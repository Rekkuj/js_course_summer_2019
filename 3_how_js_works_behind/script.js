///////////////////////////////////////
// Lecture: Hoisting
// We can use function declarations before we declare them in our code

/*

//functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2019-year);
}

// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2019 - year));
}

// variables
console.log(age); // error, age is not defined
var age = 23; // at this stage, 1st console.log is undefined,
console.log(age); // 23

function foo() {
    console.log(age); // undefined
    var age = 65;
    console.log(age);
}

foo(); // this is different age from above (23) and logs 65
console.log(age); // this logs 23

*/


///////////////////////////////////////
// Lecture: Scoping
// Each new function created a scope, in which the variables it defines are accessible

// First scoping example

/*var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}*/



// Example to show the difference between execution stack and scope chain

/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword
/*
* Regular function call: the this keyword points at the global object (the window object
* in the browser
* Method call: the this variable points to the object that is calling the method
*
* The this keyword is not assigned a value until a function where it is defined
* is actually called (invoked)
* */

//console.log(this); // window object

/*calculateAge(1985);

function calculateAge(year) {
    console.log(2019 - year);
    console.log(this); // still window object
}*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2019 - this.yearOfBirth);

        /*function innerFunction() {
            console.log(this); // = Regular function, so 'this' is window object.
        }
        innerFunction();*/
    }
}

john.calculateAge(); // john object called this

var mike = {
    name: 'Mike',
    yearOfBirth: 1984,
};

// method borrowing:
mike.calculateAge = john.calculateAge;
mike.calculateAge(); // mike object called the calculateAge method, so 'this' is Mike





































