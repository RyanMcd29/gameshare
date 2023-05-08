const { Schema, model } = require('mongoose');

const gameRequestSchema = new Schema({
   fromUser: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
   },
   toUser:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
   },
   game: {
    type: Schema.Types.ObjectId,
    ref: 'usergames',
    required: true
   },
   status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending'
   },

},
      
   {timestamps: true });

const GameRequests = model('gamerequest', gameRequestSchema);

module.exports = GameRequests;