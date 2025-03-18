'use strict';

const bookings = [];

const creatBooking = function(flightNum,
    numPassangers = 1, 
    price = 199 * numPassangers) {
    // ES5
    // numPassangers = numPassangers || 1;
    // price = price || 199;

    const booking = {
        flightNum, 
        numPassangers, 
        price
    }
    console.log(booking);
    bookings.push(booking);
};

// creatBooking('LH123');
// creatBooking('HL123', 2, 800);
// creatBooking('LH123', 2)
// creatBooking('LH123', 5);

// creatBooking('LH123', undefined, 1000)

const flight ='LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24739479284
}

// const checkIn = function(flightNum, passanger) {
//     flightNum = 'LH999';
//     passanger.name = 'Mr. ' + passanger.name;

//     if(passanger.passport === 24739479284) {
//         alert("Checked in")
//     } else {
//         alert('Wrong passport!');
//     }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // Is the same as doing...
// const flightNum = flight;
// const passanger = jonas;

// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

/*
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toLowerCase(), ...others].join(' ');
}

//Higer-order function
const transfromer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Trasnformed string: ${fn(str)}`);

    console.log(`Trasnformed by: ${fn.name}`);
}

transfromer('JavaScript is the best!', upperFirstWord)

transfromer('Javascript is the best!', oneWord)

const high5 = function() {
    console.log('high5');
}
document.body.addEventListener('click', high5);

['jonas', 'Martha', 'Adam'].forEach(high5);


const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greet('Hello')('Jonas');



const lufthansa = {
    airline: 'Luftansa',
    iataCode: "LH",
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },

};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa.bookings);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss, 582, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind Method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
// lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial applications
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// (rate, value) => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    } 
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]


const poll = {
    question: 'What is your favorite programing language',
    options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],

    answers: new Array(4).fill(0),
    registerNewAnswer() {
        // Get answer
        const answer = prompt(
            `${this.question}\n${this.options.join('\n')}
            \n(Write option number)`
        )
        console.log(answer);

        // Register answer
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

        this.displayResult();
        this.displayResult('string');
    },
    displayResult(type = 'array'){
        if (type === 'arrat') {
            console.log(this.answers);
        } else if (type ===)
    }
};
// poll.registerNewAnswer()

document
.querySelector('.poll')
.addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResult.call({ answers: [5,2,3]}, 'string')

// [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
*/

const runOnce = function() {
    console.log('This will never run again');

};
runOnce();

// IIFE
// (fucntion () {
//     console.log('This will never run again');
//     const isPrivate = 23;
// })();

( () => console.log('This will Also never run again'))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}
