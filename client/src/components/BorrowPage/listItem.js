import React from "react";
import { useMutation } from "@apollo/client";
import auth from "../../utils/auth";
import {ADD_REQUESTOR_TO_GAME ,  ADD_BORROWER_TO_GAME,  ADD_GAME_TO_BORROWED } from "../../utils/mutations";
import { useGameContext } from "../../utils/GameContext";
import { REMOVE_FROM_AVAILABLE } from "../../utils/actions";

export default function BorrowListItem (game) {
    const [state, dispatch] = useGameContext()

    // const [ addBorrowerToGame] = useMutation(ADD_BORROWER_TO_GAME);

    const [ addRequestorToGame] = useMutation(ADD_REQUESTOR_TO_GAME);

    const processGameRequest = async (userId, gameId) => {
        // console.log(userId, gameId)
        try {
          const data  = addRequestorToGame({
            variables: {userId: userId, gameId : gameId}
          })

          console.log(data)
        
        } catch (err) {
          console.error(err)  
        }
    }

    // destructure game
    const { name, id, image, platforms, genres } = game

    const requestGame = () => {
        const gameId = id
        const userId = auth.getProfile().data._id
        // call to remove game from state
        // dispatch({ type: REMOVE_FROM_AVAILABLE, _id: id })
        console.log(userId);
        processGameRequest(userId, gameId)

        // Remove game from state 


    }

    return (
        <div className="game-cart list-group-item d-flex bg-dark text-white">
        <img className="img-thumbnail" src={image}/>
        <div className=" m-2 game-cart-details">
          <p>{name}</p>
          <p>{platforms}</p>
        </div>
        <button onClick={()=>requestGame()}className="btn btn-primary h-50 position-absolute top-0 end-0">Request</button>
      </div>
    )

}