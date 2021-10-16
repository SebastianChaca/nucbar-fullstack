const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const Userschema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Debe ingresar un email'],
      unique: [true, 'El email ya se encuentra registrado'],
      lowercase: true,
      validate: [validator.isEmail, 'El email no es válido'],
    },
    password: {
      type: String,
      required: [true, 'Ingrese un password'],
      minlenght: 8,
      select: false,
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
    role: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    toJSON: { virtuals: true },
  }
);
Userschema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

Userschema.methods.correctPassword = function (
  candidatePassword,
  userPassword
) {
  return bcrypt.compareSync(candidatePassword, userPassword);
};
Userschema.virtual('isAdmin').get(function () {
  return this.role === 1;
});

module.exports = mongoose.model('User', Userschema);
