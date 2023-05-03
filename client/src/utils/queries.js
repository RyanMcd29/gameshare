import { gql } from '@apollo/client'

export const QUERY_GAMELIBRARY = gql`
    query getGamesLibrary() {
        gamelibrary
    }`