import { useReducer } from "react";
import { 
    TOGGLE_CART
} from './actions'

export const reducer = ( state, action ) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case TOGGLE_CART:
            return {
                 ...state,
                  cartOpen: !state.cartOpen,
                };
    }
};

export function useGameReducer(initialState) {
    console.log('importing reducer')
    return useReducer(reducer, initialState)
}