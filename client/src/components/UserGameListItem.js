import { useMutation } from "@apollo/client";
import React from "react";
import { REMOVE_GAME_FROM_OWNED_GAMES } from "../utils/actions";
import auth from "../utils/auth";
import { useGameContext } from "../utils/GameContext";
import {  REMOVE_GAME_FROM_USER_GAME } from "../utils/mutations";


//-- Deconstructing the "game" object --//
export default function UserListGameItem (game) {
    const [state, dispatch] = useGameContext()

    const { name, image, platform, id } = game;

    const [removeGameFromUserGame, {error, data}] = useMutation(REMOVE_GAME_FROM_USER_GAME);

    const processRemoveFromUserGames = (userId, gameId) => {
        try {
            const { data } = removeGameFromUserGame({
                variables: { userId: userId, gameId: gameId}
            })
        } catch (err) {
            console.error(err)
        }
    }

    const removeGame = async () => {
        const gameId = id
        const username = auth.getProfile().data._id

        await processRemoveFromUserGames(username, gameId)

        dispatch({
            type: REMOVE_GAME_FROM_OWNED_GAMES,
            game: game
        })

    }
    return (
        <div className="list-group-item d-flex border border-dark-subtle p-1"> 
            <img className="img-thumbnail w-25" src={image}/>
            <div className=" m-2 game-cart-details">
                <p>{name}</p>
                <p>{platform}</p>
            </div>
            <button onClick={()=>removeGame()}className="btn btn-danger px-2 position-absolute mx-2 top-50 end-0 translate-middle-y">X</button>

    </div>
    )
}