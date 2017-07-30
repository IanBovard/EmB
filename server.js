/* jshint esversion:6*/
const express = require('express');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const userRoute = require('./routes/user');
const app = express();
app.use('/user', userRoute);
app.use(express.static('public'));

app.listen(PORT, () => {
 console.log('hi!');
});
