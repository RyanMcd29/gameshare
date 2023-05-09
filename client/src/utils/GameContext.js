import React, { createContext, useContext } from "react";
import { useGameReducer } from './reducers'
import { useQuery } from "@apollo/client";
import { QUERY_GAMELIBRARY, QUERY_USER_GAMES } from "./queries";
import auth from "./auth";

const GameContext = createContext()
const { Provider } = GameContext;

const GetGameLibrary = () => {
    const { loading, data } = useQuery(QUERY_GAMELIBRARY)
    const games = data?.gamelibrary || []
    return games
}

const GetUserGames = () => {
    //get userId
    const userId = auth.getProfile().data._id
    console.log("getUserGames", userId)
    const { loading, data } = useQuery(QUERY_USER_GAMES, {variables: {
        userId : userId
    }
    })

    const userGames = data?.userGames || []
    return userGames
}

const GameProvider = ({ value = [], ...props }) => {
    
    const [state, dispatch] = useGameReducer({
        // Data from api
        gameLibrary: [],
        // Cart
        gamesToAdd: [],
        userGames: [],
        borrowedGames: []

    });

    state.gameLibrary = GetGameLibrary()
    state.userGames = GetUserGames()

    return <Provider value={[ state, dispatch ]} {...props} />;
};

    const useGameContext = () => {
        return useContext(GameContext);
    };

    export { GameProvider, useGameContext }

    