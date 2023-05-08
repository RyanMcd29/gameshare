const  { Schema, model } = require ('mongoose');

const UserGamesSchema = new Schema({
    isBorrowed: {
        type: Boolean,
        required: true,
        default: false
    },
    isListed: {
        type: Boolean,
        required: true,
        default: true
    },
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

const UserGames = model('usergames', UserGamesSchema)

module.exports = UserGames;