import React, { useEffect, useState } from "react";
import { useGameContext } from "../../utils/GameContext";
import { SAVE_GAMES, TOGGLE_CART } from "../../utils/actions";
import CartElement from "./element";
import { query } from "swup";
import { ADD_GAMES_TO_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
// import { useMutation } from "@apollo/client";

export default function GameCart () {
    const [state, dispatch] = useGameContext()
    
    // const [ addGamesToUser, { error, data }] = useMutation(ADD_GAMES_TO_USER);

    // function toggleCart() {
    //     dispatch({ type: TOGGLE_CART })
    // }

    const handleCartSubmit = () => {
        // Get logged in userID
        const userID = Auth.getProfile().data._id

        console.log(userID)
        console.log(state.gamesToAdd)
        const gameIds = state.gamesToAdd.map(game => {
            return {
                game_id: game._id,
            }
        
        })   
        console.log(gameIds)

        // addGamesToUser({
        //     variables: gameIdPlatform
        // })    
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
                    <button onClick={handleCartSubmit} className="row btn btn-success m-3">Add Games</button>
                </div>    
                </div>
    </div>
    )

}