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


// Todo: Add mutations for user games and borrow games
