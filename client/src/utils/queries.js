import { gql } from '@apollo/client'

export const QUERY_GAMES = gql`
    query getGames() {
        gamelibrary
    }`