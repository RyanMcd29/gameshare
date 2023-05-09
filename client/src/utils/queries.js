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

// export const QUERY_USER = gql`
//   query me {
//     me {
//       _id
//       username
//       email
//       userGames {
//         _id
//         name
//         img
//         date_released
//         genres
//         platform
//       }
//       borrowedGames {
//         _id
//         name
//         img
//         date_released
//         genres
//         platform
//       }
//     }
//   }
// `;

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


// Todo
// Add query to find all games not borrowed

// Todo: Add mutations for user games and borrow games


// export const QUERY_GAMELIBRARY = gql`
// `