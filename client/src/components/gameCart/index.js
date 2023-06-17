import React, { useEffect, useState } from "react";
import { useGameContext } from "../../utils/GameContext";
import { ADD_GAME_TO_GAMES_OWNED, CLEAR_CART, TOGGLE_CART } from "../../utils/actions";
import CartElement from "./element";
import { ADD_GAME_TO_USER_GAMES } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/client";
import auth from "../../utils/auth";


export default function GameCart () {

    //-- Get state and dispatch from GameContext --//
    const [state, dispatch] = useGameContext()
    
    //-- Use addGamesToUser from Apollo Client --//
    const [ addGameToUserUserGames, { error, data }] = useMutation(ADD_GAME_TO_USER_GAMES);


    //-- Submit games to user --//
    const submitGames = async (gameIdsandPlatform) => {
      // console.log(gameIdsandPlatform)

      const userId = auth.getProfile().data._id

      for (const game of gameIdsandPlatform) {
        try {
          const { data } = await addGameToUserUserGames({
            variables: { gameId: game.id, userId: userId, platform: game.platform }
          });
          
          if (data) {
            console.log("added: ", data);
            dispatch({
              type: ADD_GAME_TO_GAMES_OWNED,
              game: data.addGameToUserGames
            });
          }
        } catch (error) {
          // Handle any errors that occur during the API call
          console.error("Error adding game:", error);
        }
      }

    }

  
    //-- Toggle Cart visibility --//
    // function toggleCart() {
    //     dispatch({ type: TOGGLE_CART })
    // }

    //-- Cart Submission --//
    const handleCartSubmit = () => {
        // Get logged in userID
        const username = Auth.getProfile().data.username
          //console.log(username)
          //console.log(state.gamesToAdd)
        const gameIdsandPlatform = state.gamesToAdd.map(game => {
            return ({ id: game._id, platform: game.platform})
        })   

        //console.log("gameId&platform", gameIdsandPlatform)


      submitGames(gameIdsandPlatform)
  }

    //-- Clear Cart --//
    const handleClearCart = () => {
      if (state.gamesToAdd.length > 0) {
        dispatch({ type: CLEAR_CART });
      }
    };
  


  
  return (
    <div>

      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        Show Game Cart <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{state.gamesToAdd.length} </span>
      </button>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">Games to add</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
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

      {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#cartOffCanvas" aria-controls="offCanvasCartLabel">
        Open Cart
      </button>

      <div className="offcanvas offcanvas start" tabIndex="-1" id="cartOffCanvas" aria-labelled="offCanvasCartLabel">
        <div className="z-3 position-absolute top-50 start-50 translate-middle game-cart container d-flex">
          <div
            id="cart"
            className="container col-3 z-3 position-fixed end-0 w-25 bg-dark mt-5"
          >
            <div className="row h-75">
              <ul className="list-group">
                {/* Map over games in the cart and render CartElement for each one */}
                {/* {state.gamesToAdd && state.gamesToAdd.map((game) => (
                  <CartElement
                    key={game._id}
                    name={game.name}
                    image={game.img}
                    platform={game.platform}
                  />
                ))}
              </ul> */}
            {/* </div>
            <div className="h-10">
              <button onClick={handleCartSubmit} className="row btn btn-success m-3">
                Add Games
              </button>
              <button onClick={handleClearCart} className="row btn btn-danger m-3">
                Clear
              </button>
            </div>
          </div>
        </div> */}
      </div>

      
    // </div>
  );
}


