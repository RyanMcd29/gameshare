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
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-4">
                <img src={image} className="borrow-img card-img"/>
              </div>
              <div className="col-6">
                <div className="card-body">
                  <h6>{name}</h6>
                  <p className={platforms.toLowerCase().replace(' ', '-')}>{platforms}</p>
                </div>
              <div className="col-2 ">
                <button onClick={()=>requestGame()} className="btn btn-primary position-absolute top-50 end-0 translate-middle-y mx-2 p-2">Request</button>
              </div>
              </div>
            </div>
          </div>



      //   <div className="game-cart list-group-item d-flex">
      //   <div className="img-thumbnail img-container">
      //     <img className="img-fluid" src={image}/>
      //   </div>


      //   <div className=" m-2 game-cart-details">
      //     <p>{name}</p>
      //     <p className={platforms.toLowerCase().replace(' ', '-')}> {platforms}</p>
      //   </div>
      //   <button onClick={()=>requestGame()} className="btn btn-primary position-absolute top-50 end-0 translate-middle-y mx-2">Request</button>
      // </div>
    )

}