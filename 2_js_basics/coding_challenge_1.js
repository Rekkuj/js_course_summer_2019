/*****************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3.
(Something like "Is Mark's BMI higher than John's? true").
GOOD LUCK 😀
 */

var massMark, massJohn, heightMark, heightJohn, bmiMark, bmiJohn;
massMark = 107;
heightMark = 1.96;

massJohn = 87;
heightJohn = 1.83;

bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

var isMarksBMIhigher = bmiMark > bmiJohn;
console.log("Is Mark's BMI higher than John's? " + isMarksBMIhigher);