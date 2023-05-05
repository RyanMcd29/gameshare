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
                gameLibrary: [...action.gameLibrary]
            }
    }
};

export function useGameReducer(initialState) {
    console.log('importing reducer')
    return useReducer(reducer, initialState)
}