const db = require('../config/connection');
const { GameLibrary, User, UserGames } = require('../models');
const userData = require('./userData.json');
// const userGameData = require('./userGames.json')
const getGameDetails = require('./gamesData')

db.once('open', async () => {
    try {
        // Clear database
        await GameLibrary.deleteMany({});
        await User.deleteMany({})
        // await UserGames.deleteMany({})

        // Call game data from api
        const gamesData = await getGameDetails

        // Create data
        await GameLibrary.create(gamesData)
        await User.insertMany(userData);
        // await UserGames.insertMany(userGameData)
        
        process.exit()
    } catch (err) {
        throw err;
    }
})