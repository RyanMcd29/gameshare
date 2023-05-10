import React, { useEffect, useState } from "react";
import { useGameContext } from "../../utils/GameContext";
import { ADD_USER_GAMES, CLEAR_CART, TOGGLE_CART } from "../../utils/actions";
import CartElement from "./element";
import { ADD_GAMES_TO_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";


export default function GameCart () {

    //-- Get state and dispatch from GameContext --//
    const [state, dispatch] = useGameContext()
    
    //-- Use addGamesToUser from Apollo Client --//
    const [ addGamesToUser, { error, data }] = useMutation(ADD_GAMES_TO_USER);


    //-- Submit games to user --//
    const submitGames = async (username, gameIds) => {
      try {
        const { data } = addGamesToUser({
          variables: {username : username, gameId : gameIds}
        })
      
      } catch (err) {
        console.error(err)  
      }
    }

  
    //-- Toggle Cart visibility --//
    function toggleCart() {
        dispatch({ type: TOGGLE_CART })
    }

    //-- Cart Submission --//
    const handleCartSubmit = () => {
        // Get logged in userID
        const username = Auth.getProfile().data.username
          console.log(username)
          console.log(state.gamesToAdd)
        const gameIds = state.gamesToAdd.map(game => {
            return game._id
        })   

        console.log(gameIds)


      submitGames(username, gameIds)
  }

    //-- Clear Cart --//
    const handleClearCart = () => {
      if (state.gamesToAdd.length > 0) {
        dispatch({ type: CLEAR_CART });
      }
    };
  


  
  return (
    <div className="container d-flex">
      <div
        id="cart"
        className="container col-3 z-3 position-fixed end-0 w-25 bg-dark mt-5"
      >
        <div className="row h-75">
          <ul className="list-group">
            {/* Map over games in the cart and render CartElement for each one */}
            {state.gamesToAdd && state.gamesToAdd.map((game) => (
              <CartElement
                key={game._id}
                name={game.name}
                image={game.img}
                platform={game.platform}
              />
            ))}
          </ul>
        </div>
        <div className="h-10">
          <button onClick={handleCartSubmit} className="row btn btn-success m-3">
            Add Games
          </button>
          <button onClick={handleClearCart} className="row btn btn-danger m-3">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}


