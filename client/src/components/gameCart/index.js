import React, { useEffect, useState } from "react";
import { useGameContext } from "../../utils/GameContext";
import { SAVE_GAMES, TOGGLE_CART } from "../../utils/actions";
import CartElement from "./element";
import { ADD_GAMES_TO_USER } from "../../utils/mutations";
import { ADD_TO_CART } from "../../utils/actions";
import { CLEAR_CART } from "../../utils/actions";
import Auth from "../../utils/auth";


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
  };
  

  
  //TODO: Game cart's card layout needs to be fixed
  return (
    <div className="container d-flex">
      <div
        id="cart"
        className="container col-3 z-3 position-fixed end-0 w-25 bg-dark mt-5"
      >
        <div className="row h-75">
          <ul className="list-group">
            {state.gamesToAdd.map((game) => (
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
