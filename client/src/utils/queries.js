import { gql } from '@apollo/client'

export const QUERY_GAMELIBRARY = gql`
    query getGamesLibrary {
        gamelibrary {
            _id
            name
            img
            date_released
            genres
            platforms
          }
    }
    `;

// export const QUERY_GAMELIBRARY = gql`
// `