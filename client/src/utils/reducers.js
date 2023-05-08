import { useReducer } from "react";
import { 
    TOGGLE_CART,
    ADD_TO_CART,
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
                console.log(action.game)
                return {
                    ...state,
                    gamesToAdd: [...state.gamesToAdd, action.game]
                }
    }
};

export function useGameReducer(initialState) {
    return useReducer(reducer, initialState)
}