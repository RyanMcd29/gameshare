import { gql } from '@apollo/client'

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
    isOwnedBy {
      _id
      username
    }
    isBorrowedBy {
      _id
    }
  }
}`

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`

export const QUERY_USER_GAMES = gql`
query userGames($userId: ID) {
  userGames(userId: $userId) {
    email
    userGames {
      _id
      title
      platform
      isRequestedBy {
        _id
        username
      }
      gameDetails {
        _id
        img
        genres
        name
        platforms
      }
      isBorrowedBy {
        _id
        username
      }
    }
  }
}`


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
}`


