import { useMutation } from "@apollo/client";
import React from "react";
import auth from "../utils/auth";
// import {  REMOVE_GAME_FROM_USER_GAME } from "../utils/mutations";


//-- Deconstructing the "game" object --//
export default function RequestedGameListItem (game) {
    const { username, image, platform, id } = game;
    

    // console.log("game", game);
    
    return (
        <div className="list-group-item d-flex border border-dark-subtle p-1"> 
            <img className="img-thumbnail w-25" src={image}/>
            <div className=" m-2 game-cart-details">
                <p>{platform}</p>
                <p>{username}</p>
            </div>
        </div>
    )
}