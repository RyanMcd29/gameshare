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

        // <div className="game-cart list-group-item d-flex bg-dark text-white m-1">
        <div className="list-group-item d-flex border border-dark-subtle p-1 m-1"> 
            <img className="img-thumbnail w-25" src={image}/>
            <div className=" m-2 game-cart-details dashboard-card-element">
                <p className="mb-1">{name}</p>
                <p className="mb-1">{platform}</p>
                <p className={borrowStatus != false ? "on-loan " : "available " + "mb-1"}>{borrowStatus != "" ? "On-Loan" : "Available"}</p>
            </div>
            <button onClick={()=>removeGame()}className="btn btn-danger px-2 position-absolute mx-2 top-50 end-0 translate-middle-y">X</button> 
        </div>
    )
}