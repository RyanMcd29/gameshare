import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_USER = gql `
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser (username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const GET_USER_INFO = gql`
query GetUserInfo {
  addName {
    username
  }
}
`;

// export const ADD_GAMES_TO_USER = gql`
// query AddGamesToUser {}`
// export const ADD_GAMES = gql`
// query addGames($games: [ID]!, $users:) {
//   addGame 
// }`

export const UPDATE_GAME_REQUEST = gql`
  mutation updateGameRequest($gameRequestId: ID!, $status: String!) {
    _id
    fromUser {
      _id
      username
    }
    toUser {
      _id
      username
    }
    game {
      _id
      gameDetails {
        _id
        name
        img
      }
      platform
    }
    status
  }
`;


// TODO: Add mutations for user games
// FIXME: Check the mutations syntax, the user games mutation needs 
//to take in the ID of the game to be added and the ID of the user who is adding
export const ADD_USER_GAME = gql`
  mutation addUserGame($gameId: ID!) {
    addUserGame(gameId: $gameId) {
      _id
      username
      email
      userGames {
        _id
        name
        img
        platforms
        release_date
        genres
      }
      borrowedGames {
        _id
        name
        img
        genres
        platforms
        release_date
      }
    }
  }
`;


//TODO: Add mutation for borrowed games
//FIXME: the borrowed games mutation needs to take in the ID of the game that is being borrowed, 
//the ID of the user who is borrowing it, and the ID of the user who owns the game
export const BORROW_GAME = gql`
  mutation borrowGame($gameId: ID!, $fromUserId: ID!) {
    borrowGame(gameId: $gameId, fromUserId: $fromUserId) {
      _id
      username
      email
      userGames {
        _id
        name
        img
        platforms
        release_date
        genres
      }
      borrowedGames {
        _id
        name
        img
        genres
        platforms
        release_date
      }
    }
  }
`;