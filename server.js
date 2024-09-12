const express = require('express');
const keys = require('./config/keys.js');
const app = express();

//Setting up DB
const mongoose = require('mongoose');
mongoose.connect(keys.mongoURI);
//setting up DB models
require('./model/Score.js');

//setting up the routes
require('./routes/ScoreSaving.js')(app);
require('./routes/GetScore.js')(app);


app.listen(keys.port, () => {
    console.log("listening on " + keys.port);
})


