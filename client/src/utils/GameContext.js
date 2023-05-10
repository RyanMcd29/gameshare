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

const GetUserDetails = () => {
    //get userId
    const userName = auth.getProfile().data.username
    console.log(userName)

    const { loading, data } = useQuery(QUERY_USER_GAMES, {variables: {
        username : userName
    }})
    console.log(data)

    const userGames = data?.userGames || []
    return userGames
}

// Add state to find all games not borrowed
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

    if (auth.loggedIn === true) {
        console.log('Currently logged in');
        state.userGames = GetUserDetails();
        
    }

  
    

    return <Provider value={[ state, dispatch ]} {...props} />;
};

    const useGameContext = () => {
        return useContext(GameContext);
    };

    export { GameProvider, useGameContext }

    