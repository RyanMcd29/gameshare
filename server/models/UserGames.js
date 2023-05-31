const  { Schema, model } = require ('mongoose');

const UserGamesSchema = new Schema({
    isBorrowedBy: {

        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    isRequestedBy: [
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
        
    }
    ],
    // requestSentTo: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
        
    // },
   gameDetails: [
    {   
        type: Schema.Types.ObjectId,
        ref: 'gamelibrary'
    }
   ],
   platform: {
        type: String,

   }
},
{ 
    timestamps: true 
});


const UserGames = model('usergames', UserGamesSchema)



module.exports = UserGames;
