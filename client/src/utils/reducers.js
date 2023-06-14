import { useReducer } from "react";
import { 
    TOGGLE_CART,
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_FROM_AVAILABLE,
    PROCESS_BORROW_REQUEST,
    REMOVE_GAME_FROM_OWNED_GAMES,

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
        case PROCESS_BORROW_REQUEST:
            console.log("action object", action.game)
            let games = state.requestedGames.map((game)=>{
                console.log(game._id, action.game.id)
                 if (game._id === action.game.id) {
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
            };
        
        case REMOVE_GAME_FROM_OWNED_GAMES:
            
        
            


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