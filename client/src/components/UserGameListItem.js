import { useMutation } from "@apollo/client";
import React from "react";
import auth from "../utils/auth";
import { REMOVE_GAME_FROM_USER } from "../utils/mutations";

export default function UserListGameItem (game) {
    const { name, image, platform, id } = game;

    const [removeGameFromUser, {error, data}] = useMutation(REMOVE_GAME_FROM_USER);

    const processRemoveFromUserGames = (username,id) => {
        try {
            const { data } = removeGameFromUser({
                variables: { username: username, gameId: id}
            })
        } catch (err) {
            console.error(err)
        }
    }

    const removeGame = () => {
        console.log(id)
        const username = auth.getProfile().data.username

        processRemoveFromUserGames(username, id)
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