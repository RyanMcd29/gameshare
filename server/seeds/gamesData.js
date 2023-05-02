// const db = require('../config/connection')
const API = "https://api.rawg.io/api/games?page_size=10&rating&key=6d36d11c17574c6e960f36f8e674bd9b"
// const { GameLibrary } = require ("../models/games")
const axios = require("axios")

function destructureGames (games) {
    const destructuredGames = games.map((game) => {
        return {
            name: game.name,
            img: game.background_image,
            genres: game.genres.map((genre)=>{return genre.name}),
            platforms: game.parent_platforms.map((platform)=>{return platform.platform.name}),
            date_released: game.released
        }
    })
    return(destructuredGames)
    // createGameLibrary(destructuredGames)
}

// Connect to DB and create game document (not working)
// async function createGameLibrary(games) {
//     db.once('open', async () => {
//         try {
//             await GameLibrary.deleteMany({});
//             await GameLibrary.create(games)
//         } catch (error) {
//             throw error
//         }
//     })
// }

const getGameDetails = async () => {
    const games = await axios.get(API)
    try {    
        const gamesData = await destructureGames(games.data.results)
        return gamesData
    } catch (error) {
        console.error(error)
    }
        // .then((response) => destructureGames(response.data.results))
    
}

module.exports = getGameDetails()

