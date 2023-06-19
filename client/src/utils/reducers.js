import { useReducer } from "react";
import { 
    TOGGLE_CART,
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_FROM_AVAILABLE,
    PROCESS_BORROW_REQUEST,
    ADD_GAME_TO_GAMES_OWNED,
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

        case ADD_GAME_TO_GAMES_OWNED:
            // console.log("action object", action);
            // console.log("old state", state.userGames.userGames);
            // const updatedUserGames = state.userDetails.userGames.concat(action.game);
          
            // console.log("updatedUserGames: ", updatedUserGames);
   
            const hi = {
                ...state,
                userDetails: {
                  ...state.userDetails,
                  userGames: [
                    ...state.userDetails.userGames,
                    ...action.games
                  ]
                }
              };

              console.log(hi)
            return {
                ...state,
                userDetails: {
                  ...state.userDetails,
                  userGames: [
                    ...state.userDetails.userGames,
                    ...action.games
                  ]
                }
            };
        
        case REMOVE_GAME_FROM_OWNED_GAMES:
            console.log("action object", action.game)
            let userGames = state.userGameLibrary.filter(
                game => game._id != action.game.id
            )

            console.log(userGames)

        return {
            ...state,
            userGameLibrary: userGames
        }



        
            


        // todo: add action to remove game from state when requested
        case REMOVE_FROM_AVAILABLE: 
            console.log(state.availableGames)
            console.log(action._id)
            let newState = state.availableGames.filter((game) => {
                return game._id !== action._id
            });

            console.log("newState", newState)

            return {
                ...state,
                availableGames: newState
            }



        default:
            return state;

    }
};



export function useGameReducer(initialState) {
    return useReducer(reducer, initialState)
}