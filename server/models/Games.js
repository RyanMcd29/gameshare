const { Schema, model } = require('mongoose')

const gameSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    date_released: {
        type: Date
    },
    genre: {
        type: Array
    },
    platforms: {
        type: Array
    }
})

const GameLibrary = mongoose.model('GameLibrary', gameSchema);

module.exports = GameLibrary;