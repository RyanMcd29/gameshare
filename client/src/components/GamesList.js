import React, { useEffect, useState } from "react";
import { useGameContext } from "../utils/GameContext";
import GameItem from './gameitem/gameitem.js'

// import { idbPromise } from "../utils/helpers"

export default function GamesList () {
    // load state
    const [ state, dispatch ] = useGameContext()

    const [ filteredGames, setFilteredGames ] = useState(state.gameLibrary)
    const [ search, setSearch ] = useState('Portal 2')

    // // assign games to state
    // const { loading, data } = useQuery(QUERY_GAMELIBRARY)
    // const games = data?.gamelibrary || [];\

    const searchItems = (searchValue) => {
        setSearch(searchValue)

        const filterGames = state.gameLibrary.filter((game) => {
            return Object.values(game.name).join('').toLowerCase().includes(search.toLowerCase())
        })

        setFilteredGames(filterGames)
    }


    // console.log(data)
    // const filterGames = (search) => {
    //     setFilteredGames(state.gameLibrary)
    //     // return (state.gameLibrary.filter((game) => game.name === search))
    // }
    
    return (
        <div>
            <input 
                icon="search"
                placeholder="search"
                onChange={(e) => searchItems(e.target.value)}
            />

            { filteredGames.length ? (
                <ul className="flex-row">'
                { filteredGames.map((game) => (
                    <GameItem
                        key={game.id}
                        name={game.name}
                        image={game.img}
                        platforms={game.platforms}
                        genres={game.genres}
                    />
                ))}
                </ul>
            ) : (<h3>No games added!</h3> )}      
        </div> 
    )
   

}
    
   
