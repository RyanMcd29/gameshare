const db = require('../config/connection')
const API = "https://api.rawg.io/api/games?page_size=200&rating&key=6d36d11c17574c6e960f36f8e674bd9b"
const { GameLibrary } = require ("../models/games")
const axios = require("axios")

// function destructureGames (games) {
//     const destructuredGames = games.map((game) => {
//         return {
//             name: game.name,
//             img: game.background_image,
//             genres: game.genres.map((genre)=>{return genre.name}),
//             platforms: game.parent_platforms.map((platform)=>{return platform.platform.name}),
//             date_released: game.released
//         }
//     })
//     // console.log(destructuredGames)
    
//     createGameLibrary(destructuredGames)
// }

// // Connect to DB and create game document (not working)
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

// const getGameDetails = async () => {
//     axios.get(API)
//         .then((response) => destructureGames(response.data.results))
// }

// getGameDetails()

//TODO: I think moving the db.once() method outside of the function should fix this?

//--- Conecction to the db ---//
db.once('open', async() => {
    console.log('Connected to the database');

    const getGameDetails = async () => {
        try {
            const response = await axios.get(API)
            const games = destructureGames(response.data.results);
            await GameLibrary.deleteMany({});
            await GameLibrary.create(games);

        } catch (err) {
            console.log(err);
        }
    }

    getGameDetails();

});


function destructureGames(games) {
    const destructuredGames = games.map((game) => {
    return {
        name: game.name,
        img: game.background_image,
        genres: game.genres.map((genre) => {return genre.name}),
        platforms: game.platforms.map((platform) => {return platform.platform.name}),
        date_released: game.released
        }
      
    })

    console.log(destructuredGames)

    return destructuredGames

};

