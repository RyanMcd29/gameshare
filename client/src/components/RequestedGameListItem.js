import { useMutation } from "@apollo/client";
import React from "react";
import auth from "../utils/auth";
// import {  REMOVE_GAME_FROM_USER_GAME } from "../utils/mutations";


//-- Deconstructing the "game" object --//
export default function RequestedGameListItem (game) {

    let owner = auth.getProfile().data.username
    const { username, image, platform, id, gamename } = game;
    // console.log("game", game);

    const handleAccept = function(){

    }

    const handleReject = function(){
        
    }

    
    return (
    <div className="row mt-2 justify-content-center">
        <div className="card col-8 align-self-center border-secondary border border-3" >
            <div className="row no-gutters">
                <div className="ps-0 pe-0 col-sm-4">
                    <img className="card-img" src={image} alt="Game Image"/>
                </div>
                <div className="col-sm-8">
                    <div className="card-body">
                        <h5 className="card-title">{username}</h5>
                        <p className="card-text">Hey {owner}!  and I'd love to borrow your copy of "{gamename}" for {platform}!</p>
                        <button type="button" className="button-80 me-1" onClick={handleAccept}>Accept</button>
                        <button type="button" className="button-80 me-1" onClick={handleReject}>Reject</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
    )
}