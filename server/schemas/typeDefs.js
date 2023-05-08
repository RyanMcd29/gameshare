const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        games: [Game]
        platform: String
        borrowRequests: [GameRequest]
        lendRequests: [GameRequest]
    }
    
    type Game {
        _id: ID!
        title: String
        platform: String
        borrower: User
        lender: User
        borrowRequests: [GameRequest]
        lendRequests: [GameRequest]
    }

    type GameLibrary {
        _id: ID!
        name: String!
        img: String!
        date_released: String
        genres: [String]
        platforms: [String]
    }

    type GameRequest {
        _id: ID!
        fromUser: String
        toUser: String
        game: String
        status: String

    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User!]
        user(username: String!): User
        games(_id: ID!, username: String): [Game]
        gamelibrary: [GameLibrary]
        gameRequests: [GameRequest!]
        gameRequestsByUser(userId: String!): [GameRequest!]!
    }


    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        deleteUser(_id: ID!): User
        addGame(title: String!, platform: String!, lenderId: ID!): Game!
        deleteGame(_id: ID!): Game!
        createGameRequest(fromUser: String!, toUser: String!, game: String!): GameRequest!
        updateGameRequest(_id: ID!): Boolean!
    }
`;

module.exports = typeDefs;