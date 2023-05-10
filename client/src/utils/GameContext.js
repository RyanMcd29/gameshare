import React, { createContext, useContext } from "react";
import { useGameReducer } from './reducers'
import { useQuery } from "@apollo/client";
import { QUERY_GAMELIBRARY, QUERY_USER_GAMES } from "./queries";
import auth from "./auth";

//-- New Context and extracts the Provier component from the context --/
const GameContext = createContext()
const { Provider } = GameContext;

//-- Creates a component that queries the API to retrieve all the games available in the game library --//
const GetGameLibrary = () => {
    const { loading, data } = useQuery(QUERY_GAMELIBRARY)
    const games = data?.gamelibrary || []
    return games
}

//-- Retrieves the details of the logged-in user --//
const GetUserDetails = () => {
    //get userId
    const userName = auth.getProfile().data.username
    console.log(userName)

    const { loading, data } = useQuery(QUERY_USER_GAMES, {variables: {
        username : userName
    }})
    console.log(data)

    const userGames = data?.userGames || [] // Extract the user's games array from the fetched data, or an empty array if there is no data
    return userGames
}

//--  Add state to find all games not borrowed --//
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

//-- Hook that returns the GameContext --//
const useGameContext = () => {
    return useContext(GameContext);
};


export { GameProvider, useGameContext }

    