'use strict';

const bookings = [];

const creatBooking = function(flightNum,
    numPassangers = 1, 
    price = 199 * numPassangers
) {
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

creatBooking('LH123');
creatBooking('HL123', 2, 800);
creatBooking('LH123', 2)
creatBooking('LH123', 5);

creatBooking('LH123', undefined, 1000)