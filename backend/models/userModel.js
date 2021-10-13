const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const Userschema = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'User must have a name'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'El email no es válido'],
  },
  password: {
    type: String,
    required: [true, 'Ingrese un password'],
    minlenght: 8,
  },
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  avatarImg: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
// Userschema.pre('save', async function (next) {
//   if (this.isModified('password')) return next();

//   this.password = bcrypt.hashSync(this.password, 8);
//   next();
// });

module.exports = mongoose.model('User', Userschema);
