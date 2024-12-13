'use strict';

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