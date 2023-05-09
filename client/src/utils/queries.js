import { gql } from '@apollo/client'

// export const QUERY_USER = gql`
//   query user($username: String!) {
//     user(username: $username) {
//       _id
//       username
//       email
//     }
//   }
// `;

export const QUERY_USER = gql`
  query me {
    me {
      _id
      username
      email
      userGames {
        _id
        name
        img
        date_released
        genres
        platform
      }
      borrowedGames {
        _id
        name
        img
        date_released
        genres
        platform
      }
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
    query getUserGames($user: _id){
      user(_id: $user){
        _id
        name
        userGames {
          _id
        }
      }
    }`

// export const QUERY_GAMELIBRARY = gql`
// `