/*
console.log('Hello World!!!');

var firstName = 'Joku';
var age = 29;

// type coercion takes care of changing the type of age (number) to string
console.log(firstName + ' ' + age);


var job, isMarried;

job ='teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);


var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);*/


/*
* Basic operators
*/
/*
var now, yearJoku, yearMarko;
now = 2019;
ageJoku = 28;
ageMark = 33

// Math operators
yearJoku = now - ageJoku;
yearMarko = now - ageMark;
console.log(yearJoku);

console.log(now + 2);
console.log(now * 3);
console.log(now / 5);

// Logical operators
var jokuOlder = ageJoku < ageMark;
console.log(jokuOlder);

// typeof operator
console.log(typeof jokuOlder);
console.log(typeof ageJoku);
console.log(typeof 'Marko is older than Joku');
var x;
console.log(typeof x);*/

/*
* Operator precedence
*/
/*
var now = 2019;
var yearJohn =  1989;
var fullAge = 18;

// Multiple operators - Check operator precedence: minus is greater than >= and =
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y); // both 26, because assignment (=) associativity is right-to-left
*/

// More operators
/*x *= 2; // x = x * 2
console.log(x);
x += 10; // x = x + 10;
console.log(x);
x++; // x = x + 1;
console.log(x);
x--; // x = x - 1;
console.log(x);

var massMark, massJohn, heightMark, heightJohn, bmiMark, bmiJohn;
massMark = 107;
heightMark = 1.96;

massJohn = 87;
heightJohn = 1.83;

bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

var isMarksBMIhigher = bmiMark > bmiJohn;
console.log("Is Mark's BMI higher than John's? " + isMarksBMIhigher);*/

/*
* If / else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}*/
/*
var massMark, massJohn, heightMark, heightJohn, bmiMark, bmiJohn;
massMark = 107;
heightMark = 1.96;

massJohn = 87;
heightJohn = 1.83;

bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}*/

// var isMarksBMIhigher = bmiMark > bmiJohn;
// console.log("Is Mark's BMI higher than John's? " + isMarksBMIhigher);


/*
* Boolean logic
*/
/*
var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // between 13 and 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 20) { // between 20 and 30
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}*/


/*
* The Ternary Operator (also called conditional) and Switch Statements
*/
/*
var firstName = 'John';
var age = 16;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' :'juice';
console.log(drink);*/

// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// Switch statement
/*var job = 'teacher';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}*/
/*
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 20:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}*/
/*
var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // between 13 and 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 20) { // between 20 and 30
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}*/

/*
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/*
var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators, best practice is to use ===
if (height == '23') {
    console.log('The == operator does type coercion!');
}

*/
/*

var john1 = 89;
var john2 = 120;
var john3 = 103;

var mark1 = 116;
var mark2 = 94;
var mark3 = 123;

var mary1 = 97;
var mary2 = 134;
var mary3 = 105;

var averageJohn = (john1 + john2 + john3) / 3;
console.log(averageJohn);
var averageMark = (mark1 + mark2 + mark3) / 3;
console.log(averageMark);
var averageMary = (mary1 + mary2 + mary3) / 3;
/!*
if (averageJohn > averageMark) {
    console.log('John wins Mark with the average score of ' + averageJohn);
} else if (averageMark > averageJohn) {
    console.log('Mark wins John with the average score of ' + averageMark);
} else {
    console.log('John\'s and Mark\'s average scores are tied.');
}*!/

switch (true) {
    case averageJohn > averageMark && averageJohn > averageMary:
        console.log('John\'s average is higher than Mark\'s and Mary\'s. It is ' + averageJohn);
        break;
    case averageMark > averageJohn && averageMark > averageMary:
        console.log('Mark\'s average is higher than John\'s and Mary\'s. It is ' + averageMark);
        break;
    case averageMary > averageMark && averageMary > averageJohn:
        console.log('Mary\'s average is higher than Mark\'s and John\'s. It is ' + averageMary);
        break;
    case averageJohn === averageMark && averageMary === averageJohn:
        console.log('All are tied with ' + averageJohn + ', ' + averageMark + ' and ' + averageMary);
        break;
    default:
        console.log('There is a draw.');
        break;
}
*/

/*
* Functions
*/
/*

function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year,firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/*
* Function Statements and Expressions
*/

// Function declaration (doesn't produce any immediate result like expressions)
// function whatDoYouDo(job, firstName) {}

// Function expression
/*
var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return  firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'Mike'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('truckdriver', 'Jaakko'));
*/

/*
* Arrays are like collections of variables
*/
/*

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[5] = 'Mary';
names[names.lenght] = 'Susan';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue'); // adds to the end of the array
john.unshift('Mr'); // adds to the beginning of the array
console.log(john);

john.pop(); // removes last item
john.shift(); // removes the first item
console.log(john);

console.log(john.indexOf(1990)); // returns the position. If the item is not in the array, returns -1
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/
/*
function tipCalc(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill <= 200) {
        percentage = 0.15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];
var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(tips, finalValues);*/

/*
* Objects and properties, key - value pairs
* We can use objects to group together different variables that belong together and
* have no particular order
*/
/*

// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName); // firstName is a property of john and we can call it
// with dot
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer'; // dot can be used to mutate
john['isMarried'] = true;
console.log(john);

// new object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/*
* Objects and methods
*/
/*

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2019 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/
/*

var john = {
    fulltName: 'John Smith',
    mass: 89,
    height: 1.93,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

var mark = {
    fullName: 'Mark Belon',
    mass: 96,
    height: 1.96,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

console.log(john, mark);

function highestBMI() {
    if (john.calcBMI() > mark.calcBMI()) {
        return john.fullName + ' has highest BMI of ' + john.BMI;
    } else if (john.BMI < mark.BMI) {
        return mark.fullName + ' has highest BMI of ' + mark.BMI;
    } else {
        return 'They have the same BMI';
    }
}

console.log(highestBMI());
*/

/*
* Loops and Iteration
*/
/*
// for loop
for (var i = 0; i < 10; i++) {
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'teacher', false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// while loop, exactly the same as for loop above
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}*/
/*
// continue and break statements
var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue; // continues to the next i
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') {
        break; // exits the loop
    }
    console.log(john[i]);
}


// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}*/

/*var john = {
    firstName: 'John',
    bills: [124, 48, 268, 180, 42],
    calcTip: function() {
        var percentage;

        for (var i = 0; i < bills.length; i++) {
            if (bills[i] < 50) {
                percentage = .2;
            } else if (bills[i] >= 50 && bills[i] <= 200) {
                percentage = 0.15;
            } else {
                percentage = .1;
            }
        }
        this.tips = this.bills[i] * percentage;
        return this.tips;
    }
};*/

var john = {
    firstName: 'John',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill <= 200) {
                percentage = 0.15;
            } else {
                percentage = .1;
            }

            this.tips[i] = bill * percentage;
            this.finalValues = bill + bill * percentage;
        }
    }
};

var mark = {
    firstName: 'Mark',
    bills: [77, 375, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill <= 300) {
                percentage = 0.1;
            } else {
                percentage = .25;
            }

            this.tips[i] = bill * percentage;
            this.finalValues = bill + bill * percentage;
        }
    }
};

function calcAvg(tips) {
    var sum = 0;

    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }

    return sum / tips.length;
}

// OBS!!! Calculations for calcTip and calcAvg are here!!!!
john.calcTips();
mark.calcTips();

john.average = calcAvg(john.tips);
mark.average = calcAvg(mark.tips);

console.log(john, mark);

if (john.average > mark.average) {
    console.log('John\'s family gives more tip by average of ' +  john.average)
} else if (john.average < mark.average) {
    console.log('Mark\'s family gives more tip by average of ' +  mark.average)
} else {
    console.log('Both families gave apprx. as much tip by average of ' +  john.average)
}

















































