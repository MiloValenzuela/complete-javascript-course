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

*/

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
