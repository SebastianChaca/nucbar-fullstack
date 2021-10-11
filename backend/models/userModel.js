const mongoose = require('mongoose');

const Userschema = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'User must have a name'],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('User', Orderschema);
