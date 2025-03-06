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