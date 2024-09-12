import dotenv from 'dotenv';
dotenv.config();
const express = require('express');
const keys = require('./keys.js');
const app = express();

//Setting up DB
const mongoose = require('mongoose');
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//setting up DB models
require('./model/Score.js');

//setting up the routes
require('./routes/ScoreSaving.js')(app);
require('./routes/GetScore.js')(app);


app.listen(dev.PORT, () => {
    console.log("listening on " + dev.PORT);
})


