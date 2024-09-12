const express = require('express');
const keys = require('./keys.js');
const app = express();

//Setting up DB
const mongoose = require('mongoose');
console.log("MongoURI:", keys.mongoURI);
console.log("Port:", keys.port);

mongoose.connect(keys.mongoURI);
//setting up DB models
require('./model/Score.js');

//setting up the routes
require('./routes/ScoreSaving.js')(app);
require('./routes/GetScore.js')(app);


app.listen(keys.PORT, () => {
    console.log("listening on " + keys.PORT);
})


