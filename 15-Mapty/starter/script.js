'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if(navigator.geolocation)
navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position);
    const {latitude} = position.coords;
    const {longitude} = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const map = L.map('map').setView([51.505, -0.09], 13);

    L.titleLayer('http://{s},title.openstreetmap.org/{z}/{x}/{y}/png', {
        attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([51.5, -0.09])
    .addTo(map)
    .bindPopup('Apretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
}, 
function() {
    alert('Could not get your postition')
})