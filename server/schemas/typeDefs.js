// //TODO: Ideas to fill the doc:
// //User: name, email, password, and games (a list of games the user currently has in their possession)
// //Game: title, genre, platform, image, and description
// //Borrowing: borrower (the user borrowing the game), lender (the user lending the game), game (the game being borrowed), start_date, end_date, and status (whether the borrowing is pending, ongoing, or completed)
// //Query: users, games, borrowings, userById?, gameById?, and borrowingById?
// //Mutation: createUser, updateUser, deleteUser, createGame, updateGame, deleteGame, createBorrowing, updateBorrowing, and deleteBorrowing

// const { gql } = require('apollo-server-express');

// const typeDefs = gql `
//     type User {
//         _id: ID!
//         userName: String
//         email: String
//         password: String
//         games: [Game]
//         platform: String
//         borrowRequests: [BorrowRequest]
//         lendRequest: [LendRequest]
//     }

//     type Game {
//         _id: ID!
//         title: String
//         platform: String
//         borrower: User
//         lender: User
//         borrowRequests: [BorrowRequest]
//         lendRequest: [LendRequest]
//     }

//     type gameRequest {
//         _id: ID!
//         borrower: User
//         lender: User
//         game: Game
//     }

//     type Auth {
//         token: ID!
//         user: User
//     }

//     type Query {
//         users: [User!]
//         user(_id: ID!): User
//         games(_id: ID!, userName: String): [Game]
//     }


//     type Mutation {
//         addUser(userName: String!, email: String!, password: String!): Auth
//         deleteUser(_id: ID!): User
//         login(email: String!, password: String!): Auth
//         addGame(title: String!, platform: String!, lenderId: ID!): Game!
//         deleteGame(_id: ID!): Game!
        
//     }
    
// `;


// module.exports = typeDefs;


const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID
        userName: String
        email: String
        password: String
        games: [Game]
        platform: String
        borrowRequests: [BorrowRequest]
        lendRequests: [LendRequest]
    }

    type Game {
        _id: ID!
        title: String
        platform: String
        borrower: User
        lender: User
        borrowRequests: [BorrowRequest]
        lendRequests: [LendRequest]
    }

    type BorrowRequest {
        _id: ID!
        borrower: User
        lender: User
        game: Game
    }

    type LendRequest {
        _id: ID!
        borrower: User
        lender: User
        game: Game
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User!]
        user(userName: String!): User
        games(_id: ID!, userName: String): [Game]
    }


    type Mutation {
        addUser(userName: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        deleteUser(_id: ID!): User
        addGame(title: String!, platform: String!, lenderId: ID!): Game!
        deleteGame(_id: ID!): Game!
    }
`;

module.exports = typeDefs;