import { gql } from '@apollo/client'

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;


export const QUERY_GAMELIBRARY = gql`
    query getGamesLibrary {
      gamelibrary {
        _id
        name
        img
        genres
        platforms
        release_date
      }
    }
    `;




export const QUERY_USER_GAMES = gql`
query UserGames($username: String!) {
  userGames(username: $username) {
    email
    userGames {
      _id
      img
      name
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
}`


export const GET_AVAILABLE_GAMES = gql`
query allGames {
  allGames {
    _id
    title
    platform
    gameDetails {
      _id
      name
      img
      genres
      platforms
      release_date
    }
    isBorrowedBy {
      _id
    }
  }
}`


