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

export const ADD_GAME_TO_USER_GAMES = gql `
mutation addGameToUserGames($gameId: ID, $userId: ID, $platform: String) {
  addGameToUserGames(gameId: $gameId, userId: $userId, platform: $platform) {
    _id
  }
}`

export const ADD_GAMES_TO_USER = gql `
  mutation addGames($username: String!, $gameId: [ID]) {
    addGamesFromLibrary(username: $username, gameId: $gameId) {
      _id
      email
      userGames {
        _id
      }
    }
  }
`

export const REMOVE_GAME_FROM_USER = gql `
  mutation RemoveGameFromOwned($username: String!, $gameId: ID) {
    removeGameFromOwned(username: $username, gameId: $gameId) {
      username
      userGames {
        _id
      }
    }
  }`

export const REMOVE_GAME_FROM_OWNED = gql `
mutation RemoveGameFromUser($username: String!, $gameId: ID) {
  removeGameFromOwned(username: $username, gameId: $gameId) {
    username
    userGames {
      _id
    }
  }
}`

export const REMOVE_GAME_FROM_USER_GAME = gql `
  mutation RemoveUserGame($gameId: ID, $userId: ID) {
    removeUserGame(gameId: $gameId, userId: $userId) {
      _id
      title
      platform
    }
  }`

export const ADD_GAME_TO_BORROWED = gql `
  mutation AddGameToBorrowed($username: String!, $gameId: ID) {
    addGameToBorrowed(username: $username, gameId: $gameId) {
      _id
      borrowedGames {
        _id
      }
    }
  }`

export const ADD_BORROWER_TO_GAME = gql `
  mutation AddBorrower($gameId: ID, $userId: ID) {
    addBorrowerToGame(gameId: $gameId, userId: $userId) {
      _id
      title
      platform
      isBorrowedBy {
        _id
      }
    }
  }
`

export const REMOVE_BORROWER_FROM_GAME = gql `
mutation RemoveBorrowerFromGame($gameId: ID, $userId: ID) {
  removeBorrowerFromGame(gameId: $gameId, userId: $userId) {
    _id
    isBorrowedBy {
      _id
    }
  }
}`

export const REMOVE_GAME_FROM_BORROWED = gql `
  mutation RemoveGameFromBorrowed($username: String!, $gameId: ID) {
    removeGameFromBorrowed(username: $username, gameId: $gameId) {
      _id
      borrowedGames {
        _id
      }
    }
  }`

