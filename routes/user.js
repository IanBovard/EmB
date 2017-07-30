const express = require('express');
const router = express.Router();
const accountSid = 'AC728a7bd59040664a244e422a8b0fbb7a';
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
function success(pos) {
  var crd = pos.coords;
  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
};
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

router.post('/', (req, res) => {
  navigator.geolocation.getCurrentPosition(success, error, options);
  client.messages.create({
    to: "+17209855392",
    from: "+18085183735",
    body: `this is a test for ${crd.longitude} and ${crd.latitude}`
  }, function(err,message){
    if(err){
      console.log(err);
    }else{
    }
  });
});




module.exports = router;
