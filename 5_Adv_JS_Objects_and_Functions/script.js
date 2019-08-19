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
//
// // Primitives vs. objects
//
// var a = 23;
// var b = a;
// a= 46;
// console.log(a); // 46
// console.log(b); // 23
//
// var obj1 = {
//     name: 'John',
//     age: 26
// };
//
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age); // 30
// console.log(obj2.age); // 30 because
//
// // Functions
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };
//
// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco'
// }
//
// change(age, obj);
//
// console.log(age); // 27
// console.log(obj.city); // San Francisco

/*
 *  First-Class Functions: Passing Functions as Arguments
 */
//
// var years = [1990, 1965, 1937, 2005, 1998];
//
// function arrayCalc(arr, fn) {
//     var arrResult = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrResult.push(fn(arr[i]));
//     }
//     return arrResult;
// }
//
// function calculateAge(element) {
//     return 2019 - element;
// }
//
// function isFullAge(element) {
//     return element >= 18;
// }
//
// function maxHeartRate(element) {
//     if (element >= && element <= 81) {
//         return Math.round(206.9 - (0.67 * element));
//     } else {
//         return -1;
//     }
// }
//
// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(years, maxHeartRate);
// console.log(ages);
// console.log(fullAges);
// console.log(rates);
//

/*
 * First-Class Functions: Functions returning functions
 */
//
// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }
//
// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');
// teacherQuestion('John');
// designerQuestion('Mark');
// designerQuestion('Jane');
// teacherQuestion('Mike');
//
// interviewQuestion('teacher')('Mark');

/*
 *  Immediately Invoked Function Expressions (IIFE)
 */
//
// // Function declaration:
// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();
//
// // IIFE:
// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();
// /* In js what's inside of parenthesis cannot be a statement
//  * When the whole thing is wrapped into parenthesis js will know, that this
//  * should be treated as an expression not a declaration
//  * The score is visible only inside, so to obtain data privacy this is usable
//  */
//
// (function (goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);

/*
 * Closures
 * An inner function has always access to the variables and parameters of its
 * outer function, even after the outer function has returned
 */
//
// function retirement(retirementAge) {
//     var a = ' years left until retirement.';
//     return function(yearOfBirth) {
//         var age = 2019 - yearOfBirth;
//         console.log(retirementAge - age + a);
//     }
// }
//
// var retirementUS = retirement(66);
// retirementUS(1990);
// // Result:
// // 37 years left until retirement.
// // (2019 - (2016 -1990))
//
// var retirementGer = retirement(65);
// var retirementIce = retirement(67);
//
// retirementUS(1990);
// retirementGer(1990);
// retirementIce(1990);
//
// // scope chain is a pointer to variable objects
// // retirement(66)(1967);
// // Result:
// // 14 years left until retirement.
//
//
// function interviewQuestion(job) {
//     return function (name) {
//         if (job === 'designer') {
//             console.log(name + ', can you please explain what UX design is?');
//         } else if (job === 'teacher') {
//             console.log('What subject do you teach, ' + name + '?');
//         } else {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }
//
// interviewQuestion('teacher')('John');
// interviewQuestion('designer')('Mark');
// interviewQuestion('nanny')('Jane');

/*
* Bind, Call and Apply
*/

var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
      if (style === 'formal') {
          console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
      } else if (style === 'friendly') {
          console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
      }
  }
}

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
}

john.presentation('formal', 'morning');

// the first argument in call is referring "this" and we borrowed a method from John
john.presentation.call(emily, 'friendly', 'afternoon');

// will not work in this case, cause our function is not expecting an array
//  john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

// Curring is a technique in which we create a function based on another function, but with some preset parameters in which the bind-method is very useful for that
johnFriendly('afternoon');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');



var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for (var i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(element) {
    return 2019 - element;
}

function isFullAge(limit, element) {
    return element >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);

