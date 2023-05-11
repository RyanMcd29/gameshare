import React, { createContext, useContext } from "react";
import { useGameReducer } from './reducers'
import { useQuery } from "@apollo/client";
import { GET_AVAILABLE_GAMES, QUERY_GAMELIBRARY, QUERY_USER_GAMES } from "./queries";
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

const GetUserGameLibrary= () => {
    const { loading, data } = useQuery(GET_AVAILABLE_GAMES)
    const availableGames = data?.allGames || []

    const allGamesWithDetails= availableGames.filter((game)=>{

        console.log(game.gameDetails)

        if (game.platform != null) {
            return game
        }
    })
    
    console.log(allGamesWithDetails)
    return allGamesWithDetails
}



//-- Retrieves the details of the logged-in user --//
const GetUserDetails = () => {
    //get userId
    const userId = auth.getProfile().data._id
    console.log("userId", userId)

    const { loading, data } = useQuery(QUERY_USER_GAMES, {variables: {
        userId : userId
    }})

    const userGames = data?.userGames || [] // Extract the user's games array from the fetched data, or an empty array if there is no data

    console.log(userGames)
    return userGames
}

//--  Add state to find all games not borrowed --//
const GameProvider = ({ value = [], ...props }) => {
    
    const [state, dispatch] = useGameReducer({
        // Data from api
        gameLibrary: [],
        // Cart
        userGameLibrary:[],
        availableGames: [],
        gamesToAdd: [],
        userGames: [],
        borrowedGames: []
    });
    

    state.gameLibrary = GetGameLibrary();
    state.userGameLibrary = GetUserGameLibrary();

    if (auth.loggedIn() === true) {
        state.userGames = GetUserDetails();
    }

    
    return <Provider value={[ state, dispatch ]} {...props} />;
};

//-- Hook that returns the GameContext --//
const useGameContext = () => {
    return useContext(GameContext);
};


export { GameProvider, useGameContext }

    