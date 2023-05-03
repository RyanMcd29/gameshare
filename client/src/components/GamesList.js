import React, { useEffect } from "react";
import { useGameContext } from "../utils/GameContext";
import { useQuery } from "@apollo/client"
import { QUERY_GAMELIBRARY } from "../utils/queries";

export default function GamesList () {
    const { state, dispatch } = useGameContext()
    
    const { currentGenre } = state;

    const { loading, data } = useQuery(QUERY_GAMELIBRARY)

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_GAMES,
                games: data.gamelibrary
            });
            data.gamelibrary.forEach((game) => {
                idbPromise('games', put, product)
                
            });
        }
    })

    function filterGames() {
        return state.gamesLibrary
    }
    return (
        <div>
            <div className="flex-row">


        </div>
    )
}