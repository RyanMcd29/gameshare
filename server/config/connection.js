const mongoose = require('mongoose');

//-- Connection to Mongoose db --//
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Project-Database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;