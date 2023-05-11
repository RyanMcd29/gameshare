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

const GetAvailableGames = () => {
    const { loading, data } = useQuery(GET_AVAILABLE_GAMES)
    const availableGames = data?.allGames || []
    
    var alLGamesWithoutBorrower = availableGames.filter((game)=>{
        if (game.isBorrowedBy === null) {
            return game
        }

    })

    const gamesList = alLGamesWithoutBorrower.filter((game)=>{
        if (game.platform != null) {
            return game
        }
    })
    return gamesList
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

    console.log("userGameData",userGames)
    return userGames
}

const GamesBorrowedByUser = (gameLibrary) => {
    const userId = auth.getProfile().data._id
    return gameLibrary.filter((game) => {
        console.log("game in library", game.isBorrowedBy)
        if (game.isBorrowedBy != null ){
            if (game.isBorrowedBy._id === userId){
                return game
            }
        }
    }
    )
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
    

    state.gameLibrary = GetGameLibrary()
    state.userGameLibrary = GetUserGameLibrary()
    state.availableGames = GetAvailableGames()

    if (auth.loggedIn() === true) {
        state.userGames = GetUserDetails();
        state.borrowedGames = GamesBorrowedByUser(state.userGameLibrary)
    }

    
    return <Provider value={[ state, dispatch ]} {...props} />;
};

//-- Hook that returns the GameContext --//
const useGameContext = () => {
    return useContext(GameContext);
};


export { GameProvider, useGameContext }

    