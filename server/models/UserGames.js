const  { Schema, model } = require ('mongoose');
// const bcrypt = require('bcrypt');
const UserGames = model('UserGames', userSchema);

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
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    borrower: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: {}
    }
   
},
{ 
    timestamps: true 
});

module.exports = UserGamesSchema;