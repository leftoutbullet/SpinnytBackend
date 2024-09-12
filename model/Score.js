const mongoose = require('mongoose');
const { Schema } = mongoose;

const ScoreSchema = new Schema({
    timer: Number,
    level: String,
    device: String

});

mongoose.model('score', ScoreSchema);