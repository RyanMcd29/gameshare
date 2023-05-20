import { useMutation } from "@apollo/client";
import React from "react";
import auth from "../utils/auth";
import { REMOVE_BORROWER_FROM_GAME, REMOVE_GAME_FROM_BORROWED } from "../utils/mutations";

export default function BorrowedGameListItem (game) {
    const { name, image, platform, id } = game;

    const [removeBorrowerFromGame, {error, data}] = useMutation(REMOVE_BORROWER_FROM_GAME);

    const processRemoveFromUserGames = (userId, gameId) => {
        console.log(userId, gameId)
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
        const userId = auth.getProfile().data._id

        processRemoveFromUserGames(userId, gameId)
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