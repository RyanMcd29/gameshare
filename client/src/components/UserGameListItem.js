import { useMutation } from "@apollo/client";
import React from "react";
import auth from "../utils/auth";
import { REMOVE_BORROWER_FROM_GAME, REMOVE_GAME_FROM_USER } from "../utils/mutations";


//-- Deconstructing the "game" object --//
export default function UserListGameItem (game) {
    const { name, image, platform, id } = game;

    const [removeBorrowerFromGame, {error, data}] = useMutation(REMOVE_BORROWER_FROM_GAME);

    const processRemoveFromUserGames = (userId, gameId) => {
        try {
            const { data } = removeBorrowerFromGame({
                variables: { userId: userId, gameId: gameId}
            })
        } catch (err) {
            console.error(err)
        }
    }

    const removeGame = () => {
        const gameId = id
        const username = auth.getProfile().data._id

        processRemoveFromUserGames(username, gameId)
    }
    return (
        <div className="list-group-item d-flex border border-dark-subtle p-1"> 
            <img className="img-thumbnail w-25" src={image}/>
            <div className=" m-2 game-cart-details">
                <p>{name}</p>
                <p>{platform}</p>
            </div>
            <button onClick={()=>removeGame()}className="btn btn-danger h-50 position-absolute top-0 end-0">X</button>

    </div>
    )
}