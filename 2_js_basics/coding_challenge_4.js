/*****************************
 * CODING CHALLENGE 4
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs.
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass,
and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the
object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the
full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height).
(mass in kg and height in meter).
GOOD LUCK 😀
*/

var john = {
    fullName: 'John Smith',
    mass: 89,
    height: 1.93,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
};

var mark = {
    fullName: 'Mark Belom',
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