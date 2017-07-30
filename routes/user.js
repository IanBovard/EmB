/* jshint esversion:6*/
const express = require('express');
const router = express.Router();
const accountSid = 'AC728a7bd59040664a244e422a8b0fbb7a';
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


router.post('/', (req, res) => {
  console.log('this is', req.body)
  client.messages.create({
    to: "+17209855392",
    from: "+18085183735",
    body: `https://www.google.com/maps/search/?api=1&query=${req.body.latitude},${req.body.longitude}`
  },
  function(err,message){
    if(err){
      console.log(err);
    }else{
      console.log(client.messages)
    }
  });

});


module.exports = router;
