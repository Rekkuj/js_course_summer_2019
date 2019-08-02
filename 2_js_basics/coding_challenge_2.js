/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mark both play basketball in different teams. In the latest 3 games,
John's team scored 89, 120 and 103 points, while
Mark's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console.
Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might
be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before,
log the average winner to the console. HINT: you will need the && operator to take the decision.
If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/

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
console.log(averageMary);

/*
if (averageJohn > averageMark) {
    console.log('John wins Mark with the average score of ' + averageJohn);
} else if (averageMark > averageJohn) {
    console.log('Mark wins John with the average score of ' + averageMark);
} else {
    console.log('John\'s and Mark\'s average scores are tied.');
}*/

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
