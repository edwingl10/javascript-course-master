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

/* Coding Challenge 2 
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

} */

/* Function Statements and Expressions 
//function declaration
//function whatDoYouDo(job, firstName){}

//function expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacer', 'John'));
//statements dont produce any result, if, else, while
//expressions do */

/* Arrays 
var n = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

names[1] = 'Ben';
names[names.length] = 'Mary'; //adds element

var john = ['John', 'Smith', 1990, 'teacher', false];
john.push('blue'); //adds element at end of array 
john.unshift('Mr.');

john.pop();
john.pop();
john.shift();

john.indexOf(1990); */

/* Coding Challenge 3
function calculateTip(amount){
    if(amount > 200){
        return amount * .1;
    }
    else if(amount >= 50 && amount <= 200){
        return amount * .15;
    }
    else{
        return amount * .20;
    }
}
var tip1 = calculateTip(124);
var tip2 = calculateTip(48);
var tip3 = calculateTip(268);

tips = [tip1, tip2, tip3];
total = [tip1+124, tip2+48, tip3+268]; */

/* Objects and properties 
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
}
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane); */

/*Objects and Methods 
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge(); */


/* Coding Challenge 4 
john = {
    fullName: 'john smith',
    mass: 92,
    height: 1.95,
    calculateBMI: function(){
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}
mark = {
    fullName: 'mark miller',
    mass: 78,
    height: 1.69,
    calculateBMI: function(){
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}


if(john.calculateBMI() > mark.calculateBMI()){
    console.log(john.fullName + " has a higher BMI with " + john.bmi);
}
else if(mark.calculateBMI() > john.calculateBMI()){
    console.log(mark.fullName + " has a higher BMI with " + mark.bmi);
}
else{
    console.log("Both " + mark.fullName+" and "+ john.fullName+" have same BMI with " + mark.bmi);
}
*/


