import { useReducer } from "react";
import { 
    TOGGLE_CART,
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_FROM_AVAILABLE,
    CLEAR_GAME_REQUESTS,

} from './actions'


export const reducer = ( state, action ) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case TOGGLE_CART:
            return {
                 ...state,
                  cartOpen: !state.cartOpen,
            };
        case ADD_TO_CART: 
            //console.log(action.game)
            return {
                ...state,
                gamesToAdd: [...state.gamesToAdd, action.game]
            };
        case CLEAR_CART:
            return {
                ...state,
                gamesToAdd: []
            };
        case CLEAR_GAME_REQUESTS:
            let games = state.requestedGames.map((game)=>{
                 if (game.id != action.game) {
                    return {
                        ...game,
                        isRequestedBy: []
                    }
                 }
                 return game
            })

            console.log("newstate", games)

            return {
                ...state,
                requestedGames: games
            }
            


        // todo: add action to remove game from state when requested
        // case REMOVE_FROM_AVAILABLE: 
        //     console.log(state.availableGames)
        //     console.log(action._id)
        //     let newState = state.availableGames.filter((game) => {
        //         return game._id !== action._id
        //     });

        //     console.log("newState", newState)



        default:
            return state;

    }
};



export function useGameReducer(initialState) {
    return useReducer(reducer, initialState)
}