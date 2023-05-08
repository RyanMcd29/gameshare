const { User, GameLibrary } = require("../models");
const data = require("./dataSeed.json");
const db = require("../config/connection");


db.once("open", async () => {
  console.log("db connected");

  try {
    //-- remove existing data in db --//
    await User.deleteMany({});
    await UserGames.deleteMany({});
    await GameLibrary.deleteMany({})
    // await GameRequest.deleteMany({});
    await GameLibrary.deleteMany({});

    console.log("DATA", data);

      //creating all the games
      const gameLibrary = await GameLibrary.insertMany(data.games);

      // Games owned by user0, thi user owns a copy of all of the games in the game library.
      data.users[0].userGames = gameLibrary.map(({_id})=> _id); //

      // User1 has borrowed a copy of the first game defined in the library.
      data.users[1].borrowedGames = [gameLibrary[0]._id];

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
