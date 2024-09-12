const express = require('express');
const keys = require('./keys.js');
const prod = require('./prod.js');
const app = express();

//Setting up DB
const mongoose = require('mongoose');
console.log("MongoURI:", keys.mongoURI);
console.log("Port:", keys.PORT);

mongoose.connect(keys.mongoURI);
//setting up DB models
require('./model/Score.js');

//setting up the routes
require('./routes/ScoreSaving.js')(app);
require('./routes/GetScore.js')(app);


app.listen(prod.PORT, () => {
    console.log("listening on " + prod.PORT);
})


