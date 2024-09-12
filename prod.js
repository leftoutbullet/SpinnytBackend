import dotenv from 'dotenv';
dotenv.config();
module.exports = {
    port: process.env.port,
    mongoURI: process.env.MONGO_URI,

};