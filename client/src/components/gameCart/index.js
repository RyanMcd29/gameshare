import React, { useEffect, useState } from "react";
import { useGameContext } from "../../utils/GameContext";
import { SAVE_GAMES, TOGGLE_CART } from "../../utils/actions";
import CartElement from "./element";

export default function GameCart () {
    const [state, dispatch] = useGameContext()
    
    function toggleCart() {
        dispatch({ type: TOGGLE_CART })
    }

    function saveGames() {
        dispatch({ type: SAVE_GAMES })
    }

    return (
        <div className="container">
                <div id="cart" className="container col-3 z-3 position-absolute top-0 end-0 vh-100 w-25 bg-dark">
                 
                    {/* List of games to add */}
                    <div className="row h-75">
                        <ul className="list-group">
                            { state.gamesToAdd.map((game) => {
                                <CartElement
                                    key={game._id}
                                    name={game.name}
                                    image={game.image}
                                    platform={game.platform}/>                          
                            }) }
                        </ul>
                    </div>
                <div className="h-10">
                { /* Save button */ }
                    <button className="row btn btn-success m-3">Add Games</button>
                </div>    
                </div>
    </div>
    )
}