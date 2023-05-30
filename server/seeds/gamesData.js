// const db = require('../config/connection')
require('dotenv').config()

const API_KEY = process.env.REACT_APP_RAWG_API_KEY
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

const getGameDetails = async () => {
    const games = await axios.get('https://api.rawg.io/api/games?page_size=10&rating&key='+ API_KEY)
    try {    
        const gamesData = await destructureGames(games.data.results)
        return gamesData
    } catch (error) {
        console.error(error)
    }
        // .then((response) => destructureGames(response.data.results))
    
}

module.exports = getGameDetails()

