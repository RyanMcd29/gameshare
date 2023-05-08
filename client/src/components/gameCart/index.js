import React, { useEffect, useState } from "react";
import { useGameContext } from "../../utils/GameContext";
import { TOGGLE_CART } from "../../utils/actions";

export default function GameCart () {
    const [state, dispatch] = useGameContext()
    
    function toggleCart() {
        dispatch({ type: TOGGLE_CART })
    }

    if (!state.cartOpen) {
        return (
            <div className="cart-closed" onClick={toggleCart}> 
                <span role="img" aria-label="trash">
                🛒
                </span>
            </div>
        )
    } else {
    return (
        <div>
                {/* Arrow to pull up from bottom */}
                <div className="close" onClick={toggleCart}>
                    [close]
                </div>
                { /* Save button */ }
                <button className="btn btn-success">Add Games</button>
                
                {/* List of games to add */}
                <ul>
                    { state.gamesToAdd.map((game) => {
                        { return (
                            <div className="container"> 
                                <img className="img-thumbnail" src={game.img}/>
                                <p>{game.name}</p>
                            </div>
                        )}
                       
                    }) }
                </ul>
    </div>
    )
    
    }
}