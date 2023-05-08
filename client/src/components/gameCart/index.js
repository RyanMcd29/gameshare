import React, { useEffect, useState } from "react";
import { useGameContext } from "../../utils/GameContext";
import { SAVE_GAMES, TOGGLE_CART } from "../../utils/actions";
import CartElement from "./element";
import { query } from "swup";

export default function GameCart () {
    const [state, dispatch] = useGameContext()
    
    // const [ sendGames, { error, data }] = useMutation(ADD_GAMES);

    function toggleCart() {
        dispatch({ type: TOGGLE_CART })
    }

    function saveGames() {
        console.log(state.gamesToAdd)
        const gameIdPlatform = state.gamesToAdd.map(game => {
            return {
                user_id: "6454f517a3096d974a038e1f",
                game_id: game._id,
                platform: game.platform
            }           
        })

        
        return (gameIdPlatform)
    
    }

    // const submitCart = async () => {
    //     const cartGames = saveGames()

    //     try {
    //         const { data } = await sendGames({
    //             variables: {cartGames},

    //         })
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

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
                    <button onClick={saveGames} className="row btn btn-success m-3">Add Games</button>
                </div>    
                </div>
    </div>
    )

}