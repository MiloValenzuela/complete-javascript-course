'use strict';
/*
const jessica1 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

function marryPerson(person, newLastName) {
    person.lastName = newLastName;
    return person;
}

const marriedJessica = marryPerson(jessica1, 'Davis');

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

console.log('Before:', jessica1);
console.log('After:', marriedJessica);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};

// Shallow Copy
const jessicaCopy = {...jessica};
jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before:',jessica);
// console.log('After:', jessicaCopy);

// Deep Clone or copy
const jessicaClone = structuredClone(jessica);
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Original:',jessica);
console.log('Clone:', jessicaClone);

*/
/*
function calcAge(birthYear) {
    const age = 2037 - birthYear;
    
    function printAge() {
        let output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName ='Steve'
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }

            output = 'NEW OUTPUT'
        }
        console.log(millenial);
        // console.log(add(2, 3));
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Jonas';
calcAge(1987);
// console.log(age);



// Functions
console.log(addDecl(2 + 3));

function addDecl(a,b) {
    return a + b;
}

const addExpr = function(a,b) {
    return a + b;
}

const addArrow = (a,b) => a + b;

// Example
if(!numProducts) deleteShoppingCart

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;


*/



const calcAge = function(birthYear) {
    console.log(2037 - birthYear);
    // console.log(this);
};
calcAge(1987);

const calcAgeArrow = birthYear => {
    console.log(2037- birthYear);
    // console.log(this);
};
calcAgeArrow(1980);

const jonas ={
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    }
}
jonas.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f(1987);