//console.log('Hello World!!!');

/* Variable mutation and type coercion 
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' 
+ job +'. Is he married? ' + isMarried);
*/

/* Variable Mutation 
age = "twenty eight";
job = 'driver';

var lastName = prompt('what is his last name?');
console.log(lastName);
*/

/* Basic Operators 
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

yearJohn = now-ageJohn;
yearMark = now-ageMark;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'hello');
var x;
console.log(typeof x);
*/

/* Operator precedence 
var no = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//multiple assignments 
var x, y;
x = y =(3+5) * 4 - 6;
//asignment operator works from right to left */

/* Coding Challenge 1 
var markHeight = 1.69; //meters
var johnHeight = 1.95;
var markMass = 78; //kg
var johnMass = 92;

var markBMI = markMass / (markHeight ** 2);
var johnBMI = johnMass / (johnHeight ** 2);

if(markBMI > johnBMI){
    console.log("Mark's BMI is higher than John's");
}else{
    console.log("John's BMI is higher than John's");
} */


/* Truthy and Falsy values and equality operators 

//falsy values: undefined, null, 0, '', NaN
//truthy values: Not falsy values
// == does type coercion. data types of both variables dont have to match
var height = 23;
if(height == '23'){ //returns true
    console.log('the == operator does types corecion');
}
*/

/* Coding Challenge 2 */
var johnTeam = (89+120+103)/3;
var mikeTeam = (116+94+123)/3;
var maryTeam = (97+134+105)/3;

switch(true){
    case johnTeam > mikeTeam && johnTeam > maryTeam:
        console.log("john's team wins with an average of " + johnTeam);
        break;
    case mikeTeam > johnTeam && mikeTeam > maryTeam:
        console.log("mikes's team wins with an average of " + mikeTeam);
        break;
    case maryTeam > mikeTeam && maryTeam > mikeTeam:
        console.log("mary's team wins with an average of " + johnTeam);
        break;
    default:
        console.log("john's team ties with mike's team with an average of " + johnTeam);

}