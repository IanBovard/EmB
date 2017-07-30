/* jshint esversion:6*/
/*const express = require('express');
const router = express.Router();*/
const button = document.getElementById('button');

let coordinates = {};
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
function success(pos) {
  let crd = pos.coords;
  coordinates = {
    latitude : crd.latitude,
    longitude : crd.longitude
  };
  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
button.addEventListener('click', (e) =>{
  navigator.geolocation.getCurrentPosition(success, error, options);

});