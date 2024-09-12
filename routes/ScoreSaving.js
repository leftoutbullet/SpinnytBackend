const mongoose = require('mongoose');
const Score = mongoose.model('score');

module.exports = app => {
    app.get('/score', async (req, res) => {

        let { rTimer, rLevel, rDevice } = req.query;

        // Check if the required query parameters are provided
        if (rTimer == null || rLevel == null || rDevice == null) {
            res.send("Invalid entries");
            return;
        }

        // Convert rTimer to a number, ensuring that any commas are replaced with periods for correct float parsing
        rTimer = parseFloat(rTimer.replace(',', '.'));

        // If the conversion fails and rTimer is NaN, return an error
        if (isNaN(rTimer)) {
            res.send("Invalid timer value");
            return;
        }

        // Search for an existing score with the same timer and device
        let scoreVariable = await Score.findOne({ timer: rTimer, device: rDevice });

        if (scoreVariable == null) {
            console.log("Creating new entry for score");

            // Create a new score entry if none exists
            let newScore = new Score({
                timer: rTimer,  // Use the converted number value
                level: rLevel,
                device: rDevice,
            });

            await newScore.save();
            res.send(newScore);
        } else {
            console.log("Retrieving existing entry for score");
            res.send(scoreVariable);
        }
    });
}
