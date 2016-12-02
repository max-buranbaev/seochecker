const express = require('express');
const http = require('http');
const config = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');


// setting up application
let app = express();


// getting config
app.config = config;


// server
app.server = http.createServer(app);


// setup mongoose
app.db = mongoose.createConnection(config.mongodb.uri);
app.db.on('error', console.error.bind(console, 'mongoose connection error: '));
app.db.once('open', () => console.log("We connect to mongodb"));


// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// set static folder
app.use(express.static(path.join(__dirname, 'public')));


// routes
require('./routes/index.js')(app);

module.exports = app;
