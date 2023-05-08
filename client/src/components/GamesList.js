import { empty } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useGameContext } from "../utils/GameContext";
import GameItem from './gameitem/gameitem.js'
import GameCart from './gameCart/index'

// import { idbPromise } from "../utils/helpers"

export default function GamesList () {
    // load state
    const [ state, dispatch ] = useGameContext()

    const [ filteredGames, setFilteredGames ] = useState(state.gameLibrary)
    const [ search, setSearch ] = useState('')

    const searchItems = (searchValue) => {
        setSearch(searchValue)
        
        const filterGames = state.gameLibrary.filter((game) => {
            return Object.values(game.name).join('').toLowerCase().includes(search.toLowerCase())
        })

        setFilteredGames(filterGames)
    }
    
    return (
        <div className="container-sm">
            <input 
                icon="search"
                placeholder="search"
                onChange={(e) => searchItems(e.target.value)}
            />

            { filteredGames.length ? (
                <ul className="row flex">
                { filteredGames.map((game) => (
                    <GameItem
                        key={game._id}
                        id={game._id}
                        name={game.name}
                        image={game.img}
                        platforms={game.platforms}
                        genres={game.genres}
                    />
                ))}
                </ul>
            ) : (<h3>No games added!</h3> )}      
            
            {/* Render if gamestoadd in state */}
            <GameCart/>
        </div> 
    )
   

}
    
   
