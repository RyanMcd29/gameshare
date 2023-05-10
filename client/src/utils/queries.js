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

export const GET_AVAILABLE_GAMES = gql`
query AvailableGames {
  availableGames {
    _id
    userGames {
      _id
      name
      img
      genres
      platforms
      release_date
    }
  }
}`
// TODO:
// Add query to find all games not borrowed
//FIXME: I've modified the query you had to include the id of the borrowedGames
//TODO: uncomment if you are happy to swap this with the old query, this one
// will  filter out any games where the borrowedGames array is not null

// export const QUERY_GAMELIBRARY = gql`
//   query getGamesLibrary {
//     gamelibrary {
//       _id
//       name
//       img
//       genres
//       platforms
//       release_date
//     }
//     borrowedGames {
//       _id
//     }
//   }
// `;

// TODO: Add mutations for user games and borrow games


