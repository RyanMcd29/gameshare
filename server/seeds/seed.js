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


//-----------------Old shit ^^^---------------

//-----------Maybe salvaged shit >>>-----------------


//----------------------------------------------------

const { User, GameLibrary, UserGames } = require("../models");
const data = require("./dataSeed.json");
const db = require("../config/connection");
const getGameDetails = require('./gamesData');


db.once("open", async () => {
  console.log("db connected");

  try {

    //-----------Maybe salvaged shit >>>-----------------

    // Clear database
    // await GameLibrary.deleteMany({});
    // await User.deleteMany({})
    // await UserGames.deleteMany({})

    // Call game data from api
    // const gamesData = await getGameDetails

    // Create data
    // await GameLibrary.create(gamesData)
    // await User.insertMany(userData);
    // await UserGames.insertMany(userGameData)

            

    //----------------------------------------------------



    //-- remove existing data in db --//
    await User.deleteMany({});
    await UserGames.deleteMany({});
    await GameLibrary.deleteMany({});

    // Call game data from api
    const gamesData = await getGameDetails

    console.log("DATA", data);
    console.log("GAMESDATA", gamesData);

    //creating all the games, storing them as an array in 'gameLibrary'
    //const gameLibrary = await GameLibrary.insertMany(data.games); // Luca

    //WILL- store an ARRAY of game OBJECTS in the gamelibrary variable.
    const gameLibrary = await GameLibrary.insertMany(gamesData); 

    // gamesData.map((_id) => {
    //   UserGames.insert({
    //     getGameDetails: _id,
    //     platform: "Xbox"


    // })
    // })

    //---------SEEDING OWNED GAME LIBRARIES
    // Games owned by user0 (Ryan) AND user1 (Will), this user owns a copy of ALL of the games in the game library.
    data.users[0].userGames = gameLibrary.map(({_id}) => _id);
    data.users[1].userGames = gameLibrary.map(({_id}) => _id);




    //----------SEEDING BORROWED GAME LIBRARIES
    // User0 (Ryan) has borrowed the first x4 games defined in the library.
    let userZeroBorrowed = [];
    for(let i = 0; i < 4; i++){
      userZeroBorrowed.push(gameLibrary[i]._id);
    }
    data.users[0].borrowedGames = userZeroBorrowed;

    // User1 (Will) has borrowed the first x4 games defined in the library.
    let userOneBorrowed = [];
    for(let i = 0; i < 4; i++){
      userOneBorrowed.push(gameLibrary[i]._id);
    }
    data.users[1].borrowedGames = userOneBorrowed;
    
    // User2 (Mauxi)
    // user2 has borrowed a copy of the second game (index #1) defined in the library
    data.users[2].borrowedGames = [gameLibrary[1]._id];

    
    const users = await User.insertMany(data.users);

    console.log("users", users);
    console.log("Data seeded");
    process.exit();

 } catch (err) {
    console.error(err);
      process.exit(1);
  }
});
