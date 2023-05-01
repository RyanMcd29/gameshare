const db = require('../config/connection')
const { GameLibrary } = require('../models')

const getGameDetails = require('./gamesData')
// const userData = require('./users')
// const userGameData = require('./userGames')

db.once('open', async () => {
    try {
        await GameLibrary.deleteMany({});
        const gamesData = await getGameDetails
        await GameLibrary.create(gamesData)
    } catch (err) {
        throw err;
    }
})