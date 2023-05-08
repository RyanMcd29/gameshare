// const db = require('../config/connection');
// const { GameLibrary, User, UserGames } = require('../models');
// const userData = require('./userData.json');
// // const userGameData = require('./userGames.json')
// const getGameDetails = require('./gamesData')

// db.once('open', async () => {
//     try {
//         // Clear database
//         await GameLibrary.deleteMany({});
//         await User.deleteMany({})
//         // await UserGames.deleteMany({})

//         // Call game data from api
//         const gamesData = await getGameDetails

//         // Create data
//         await GameLibrary.create(gamesData)
//         await User.insertMany(userData);
//         // await UserGames.insertMany(userGameData)
        
//         process.exit()
//     } catch (err) {
//         throw err;
//     }
// })




// const db = require('../config/connection');
// const { GameLibrary, User, UserGames } = require('../models');
// const userData = require('./userData.json');
// // const userGameData = require('./userGames.json')
// const getGameDetails = require('./gamesData')

// db.once('open', async () => {
//     try {
//         // Clear database
//         await GameLibrary.deleteMany({});
//         await User.deleteMany({})
//         // await UserGames.deleteMany({})

//         // Call game data from api
//         const gamesData = await getGameDetails

//         // Create data
//         await GameLibrary.create(gamesData)
//         await User.insertMany(userData);
//         // await UserGames.insertMany(userGameData)

//         process.exit()
//     } catch (err) {
//         throw err;
//     }
// })

// const User = require('./models/User');
// const UserGames = require('./models/UserGames');
// const GameRequests = require('./models/GameRequests');

const { User, GameLibrary, UserGames } = require("../models");
const data = require("./dataSeed.json");
const db = require("../config/connection");


db.once("open", async () => {
  console.log("db connected");

  try {
    //-- remove existing data in db --//
    await User.deleteMany({});
    await UserGames.deleteMany({});
    // await GameRequest.deleteMany({});

    const gameLibrary = await GameLibrary.insertMany(data.games);
    // let user0 = data.users[0];
    // let user1 = data.users[1];

    data.users[0].userGames = gameLibrary.map(({_id})=> _id);

    data.users[1].borrowedGames = [gameLibrary[0]._id];

    const users = await User.insertMany(data.users);

    // const usergame = await UserGames.create({
    //   isBorrowedBy: users[1]._id,
    //   gameDetails: gameLibrary[0]._id,
    //   platform: "ps4",
    // });



    // await User.findOneAndUpdate({ _id: users[0]._id }, {
    //   userGames: [usergame._id]
    // });

    //   console.log("AAAA", gameLibrary[0]._id);

    //   user0.userGames = [
    //     {
    //       // isBorrowed: false,
    //       // isBorrowedBy: asd[0]._id,
    //       // gameDetails: gameLibrary[0]._id,
    //       platform: "ps4",
    //     }
    //   ];

    //  await User.insertMany([user0]);

    // await User.create(user0);

    // await User.findOneAndUpdate({ _id: users[0]._id }, {
    //   userGames: [{
    //     // isBorrowed: false,
    //     isBorrowedBy: users[1]._id,
    //     gameDetails: gameLibrary[0]._id,
    //     platform: "ps4"
    //   }]
    // });

    // data.users[1].borrowedGames = [{
    //   isBorrowed: false,
    //   gameDetails: gameLibrary[0]._id,
    //   platform: "ps4"
    // }];

    // const users = await User.insertMany(data.users);

    // data.users[0].userGames = gameLibrary.map(({ _id }) => _id);
    // data.users[1].userGames = gameLibrary[1]; // [1, 2]

    // //-- create users --/

    // //-- user games --//
    // const userGames = await UserGames.insertMany(data.games.map(game => ({
    //    gameDetails: game,
    //    platform: game.platform[0]

    // })));

    // //-- add user games to users --//
    // for (let i = 0; i < users.length; i++) {
    //     users[i].userGames.push(userGames[i * 2]._id);
    //     users[i].userGames.push(userGames[i * 2 + 1]._id);
    //     await users[i].save();
    //   }

    // //-- create game requests --//
    // const gameRequests = await GameRequests.insertMany(data.users.flatMap(user =>
    //     user.gameRequests.map(request => ({
    //       fromUser: users.find(u => u.username === request.fromUser)._id,
    //       toUser: users.find(u => u.username === request.toUser)._id,
    //       game: userGames.find(g => g.gameDetails.name === request.game)._id,
    //       status: request.status,
    //     }))
    //   ));

    // //-- update borrowed games --//
    // for (let i = 0; i < users.length; i++) {
    //     const borrowedGames = gameRequests.filter(request => request.toUser.equals(users[i]._id));
    //     users[i].borrowedGames = borrowedGames.map(request => ({
    //       game: request.game,
    //       platform: userGames.find(g => g._id.equals(request.game)).platform,
    //       fromUser: users.find(u => u._id.equals(request.fromUser)).username,
    //       status: request.status,
    //     }));
    //     await users[i].save();
    //   }

    console.log("Data seeded");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
