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

/* Operator precedence */
var no = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//multiple assignments 
var x, y;
x = y =(3+5) * 4 - 6;
//asignment operator works from right to left