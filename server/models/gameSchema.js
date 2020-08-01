const mongoose = require('mongoose');
var   Schema = mongoose.Schema;

var gameSchema = new Schema({
    gameId: {
        type: String,
        required: true
    },
    gameName: {
        type: String,
        required: true
    },
    image: String
});

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;