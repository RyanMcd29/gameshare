import React, { useEffect, useState } from "react";
import { UPDATE_GAMES } from "../utils/actions";
import { useGameContext } from "../utils/GameContext";
import { useQuery } from "@apollo/client"
import { QUERY_GAMELIBRARY } from "../utils/queries";
// import { idbPromise } from "../utils/helpers"
import gameItem from './gameitem/gameitem.js'

export default function GamesList () {
    // load state
    const [ state, dispatch ] = useGameContext()

    const [ search, setSearch ] = useState('')

    // assign games to state
    const { loading, data } = useQuery(QUERY_GAMELIBRARY)
    const games = data?.gamelibrary || [];
    state.gameLibrary = games

    const [ displayedGames, setDisplayedGames ] = useState([state.gameLibrary])
    // console.log(data)
    function filterGames() {
        setDisplayedGames(state.gameLibrary.filter((game) => game.name === search))
    }



    return (
        <div>
            { displayedGames.length ? (
                <ul className="flex-row">'
                { displayedGames.map((game) => (
                    <gameItem
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
    
   
