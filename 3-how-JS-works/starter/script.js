///////////////////////////////////////
// Lecture: Hoisting only works for function declaration

//works
calculateAge(1990);

function calculateAge(year){
    console.log(2016-year);
}

//retirement(1965); -> doesnt work 
var retirement = function(year){
    console.log(65-(2016-year));
}
retirement(1965);

console.log(age) //-> undefined because we dont have the value yet
var age = 23;
console.log(age);

function foo(){
    var age = 65;
    console.log(age);
}
foo();
console.log(age);


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() { -> prints Hello!Hi!Hey
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

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

//console.log(this);

calculateAge(1985);

function calculateAge(year){
    console.log(2016-year);
    console.log(this); //->this attached to the window
}

var john = {
    name: 'John',
    yearOfBirth: 1990, 
    calculateAge: function(year){ //-> method
        console.log(this); // -> this is now the john object
        console.log(2016-this.yearOfBirth);
        /*
        function innerFunction(){
            console.log(this) // -> attached to the window, regular function call this points to window object
        }
        innerFunction(); */
    }
};
john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984,
};
//method borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge();
//this variable is only assigned a value when the object calls the method
