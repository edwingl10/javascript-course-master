/** let and const 
const name6 = 'Jane Smith';
let age6 = 23;

function driverLicense(passedTest){
    if(passedTest){
        let firstName = 'John';
        const yearOfBirth = 1990

        console.log(firstName+' born in '+ yearOfBirth+', can now drive a car.');
    }
}
//let and const variables are block scoped **/


/** blocks and IIFEs 
//IIFE in es6
{
    const a = 1;
    let b = 2;
}

//es5
(function(){
    var c =3;
})();
**/

/** Strings 
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year){
    return 2016 - year;
}

console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
n.startsWith('J');
n.endsWith('th');
n.includes('s');
console.log(firstName.repeat(5));  */

/* Arrow functions
const years = [1990, 1965, 1982, 1937];

const ages6 = years.map(el => 2016-el);

console.log(age6); */

/* 
//have lexical this variable, use parents this
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click', () => {
            var str = this.position + this.color;
            alert(str);
        });
    }
}

//es5
function Person(name){
    this.name = name;
}
Person.prototype.myFriends5 = function(friends){

    var arr = friends.map(function(el){
        return this.name + 'is friends with '+ el;
    }.bind(this));
}

//es6
Person.prototype.myFriends6 = function(friends){

    var arr = friends.map(el=>`${this.name} is friends with ${el}`);
} */

/* Destructuring 
//es5
var john = ['John', 26];
var name = john[0];
var age = john[1];
//es6
const [name, year] = ['John', 26];

const obj = {
    firstName: 'John',
    lastName: 'Smith'
}
const {firstName, lastName} = obj;

function calcAgeRetirement(year){
    const age = new Date().getFullYear - year;
    return [age, 65-age];
}
const [age, retirement] = calcAgeRetirement(1990); */

/* Arrays 
const boxes = document.querySelectorAll('.box'); //returns node list
var boxesArr6 = Array.from(boxes) //transforms node list to array 
boexesArr6.forEach( cur => cur.style.backgroundColor='blue');

//cant use break or continue in forEach/Map
for(const cur of boxesArr6){
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I change to blue';
}

var ages = [12, 17, 8, 21, 14, 11];
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18)); */

/* Spread operator 
function addFourAges(a, b, c, d){
    return a+b+c+d;
}
var sum1 = addFourAges(18, 30, 12, 21);

//es5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
//es6 
const sum3 = addFourAges(...ages);

const familySmith = ['john', 'jane', 'mark'];
const familyMiller = ['mary', 'bob', 'anne'];
const bigFamily = [...familySmith,'Lily', ...familyMiller];

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple'); */


/* Rest Parameters 
function isFullAge6(limit, ...years){ //will transform the arguments into an array
    years.forEach(cur => console.log((2016-cur) >= limit))
}

ifFullAge6(16, 1990, 1999, 1965); */


/* Default Parameter 
function SmithPerson(firstName, yearOfBirth, lastName='Smith', nationality='american'){
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
};

var john = new SmithPerson('John', 1990); */


/* Maps 
//we can use any kind of primite values, functions and objects as keys
//maps are iterable, easy to get size of map
const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'correct answer');
question.set(false, 'wrong answer. Please try again');

console.log(question.get('question'));
console.log(question.size);

//if(question.has(4)){
    //question.delete(4);
//}

//question.clear();
question.forEach((value, key) => console.log(value, key));

for(let [key, value] of question.entries()){
    if(typeof(key) == 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = praseInt(prompt('Write the correct answer'));
question.get(ans === question.get('correct')); */

/* Classes */
class Person6{
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var age = new Date().getFullYear- this.yearOfBirth;
        console.log(age);
    }
    static greeting(){
        console.log('Hey there');
    }
}

const john = new Person6('John', 1990, 'teacher');

