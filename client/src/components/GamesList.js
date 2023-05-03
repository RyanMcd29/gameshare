import React, { useEffect } from "react";
import { UPDATE_GAMES } from "../utils/actions";
import { useGameContext } from "../utils/GameContext";
import { useQuery } from "@apollo/client"
import { QUERY_GAMELIBRARY } from "../utils/queries";
import { idbPromise } from "../utils/helpers"

export default function GamesList () {
    const { state, dispatch } = useGameContext()
    
    const { currentGenre } = state;

    const { loading, data } = useQuery(QUERY_GAMELIBRARY)

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_GAMES,
                gamelibrary: data.gamelibrary
            });
            data.gamelibrary.forEach((game) => {
                idbPromise('gamelibrary', 'put', game) 
            });
        } else if (!loading) {
            idbPromise('gamelibrary', 'get').then((gamesLibrary) => {
                dispatch({
                    type: UPDATE_GAMES,
                    gamesLibrary: gamesLibrary,
                });
            });
        }
    }, [data, loading, dispatch])

    function filterGames() {
        if (!currentGenre) {
            return state.gamesLibrary
        }

        return state.gamesLibrary.filter(
            (game) => game.genre._id === currentGenre
        );
    }
    
    return (
        console.log(filterGames)
    )
}