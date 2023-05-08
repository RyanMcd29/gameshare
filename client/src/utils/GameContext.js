import React, { createContext, useContext } from "react";
import { useGameReducer } from './reducers'
import { useQuery } from "@apollo/client";
import { QUERY_GAMELIBRARY } from "./queries";

const GameContext = createContext()
const { Provider } = GameContext;


const GameProvider = ({ value = [], ...props }) => {
    const { loading, data } = useQuery(QUERY_GAMELIBRARY)
    const games = data?.gamelibrary || []
    
    const [state, dispatch] = useGameReducer({
        // Data from api
        gameLibrary: [],
        // Cart
        gamesToAdd: [],
        cartOpen: false,
        genres: [],
        currentGenres: '',
        search: '',
        currentSearch: '',
        platforms: [],
        currentPlatform: '',        
    });

    state.gameLibrary = games

    return <Provider value={[ state, dispatch ]} {...props} />;
};

    const useGameContext = () => {
        return useContext(GameContext);
    };

    export { GameProvider, useGameContext }
