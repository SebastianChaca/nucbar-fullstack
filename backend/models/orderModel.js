const mongoose = require('mongoose');

const Orderschema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
  ],
  status: {
    enum: ['Pending', 'Rejected', 'Completed'],
    type: String,
  },
  total: {
    type: Number,
    // required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
Orderschema.pre(/^find/, function (next) {
  this.populate({
    path: 'products',
    select: ['name', 'price', 'stock', 'brand'],
  }).populate({
    path: 'user',
    select: ['name', 'lastName', 'email'],
  });
  next();
});
module.exports = mongoose.model('Order', Orderschema);
