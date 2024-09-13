const mongoose = require('mongoose');
const Score = mongoose.model('score');


module.exports = app => {
    app.get('/score/top', async (req, res) => {
        try {
            const highestTimers = await Score.find()
                .sort({ timer: -1 }) // Sort by timer field in descending order
                .limit(3); // Limit the result to 3 documents

            res.send(highestTimers);
        } catch (error) {
            console.error("Error retrieving highest timers:", error);
            res.status(500).send("Internal Server Error");
        }
    });
}

