/* jshint esversion:6*/

const express = require('express');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const app = express();

const accountSid = 'AC728a7bd59040664a244e422a8b0fbb7a';
const authToken = '34d56499ed938d2d2ea903fd3c647d60';


var client = require('twilio')(accountSid, authToken);


app.listen(PORT, () => {
 console.log('hi ya nerd!');
});

app.use(express.static('public'));
