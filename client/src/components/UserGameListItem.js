import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import auth from "../utils/auth";
import {  REMOVE_GAME_FROM_USER_GAME } from "../utils/mutations";


//-- Deconstructing the "game" object --//
export default function UserListGameItem (game) {
    const { name, image, platform, id, isBorrowedBy} = game;

    const [borrowStatus, setBorrowStatus] = useState(false)
    //Will-New
    console.log(isBorrowedBy);
    
    useEffect(()=>{
        if (isBorrowedBy) {
            setBorrowStatus(true)
        }
    })

    


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
                <p>{borrowStatus != "" ? "On-Loan" : ""}</p>
            </div>
            <button onClick={()=>removeGame()}className="btn btn-danger px-2 position-absolute mx-2 top-50 end-0 translate-middle-y">X</button> 
        </div>
    )
}