const  { Schema, model } = require ('mongoose');

const UserGamesSchema = new Schema({
    isBorrowedBy: {
        // type: Boolean,
        // required: true,
        // default: false
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    // isListed: {
    //     type: Boolean,
    //     required: true,
    //     default: true
    // },
   gameDetails: [
    {   
        type: Schema.Types.ObjectId,
        ref: 'gamelibrary'
    }
   ],
   platform: {
        type: String,
        required: true
   }
},
{ 
    timestamps: true 
});


const UserGames = model('UserGames', UserGamesSchema)



module.exports = UserGames;
