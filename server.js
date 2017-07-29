/* jshint esversion:6*/
const express = require('express');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const app = express();

app.listen(PORT, () => {
 console.log('hi ya nerd!');
});

app.use(express.static('public'));