import { useReducer } from "react";
import { 
    UPDATE_GAMES
} from './actions'

export const reducer = ( state, action ) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case UPDATE_GAMES:
            return {
                ...state,
                gamelibrary: [...action.gamelibrary]
            }
    }
};

export function useGameReducer(initialState) {
    return useReducer(reducer, initialState)
}