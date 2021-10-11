const mongoose = require('mongoose');

const Orderchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  products: {
    required: true,
    //lista de productos ????
  },
  status: {
    required: true,
    type: String,
  },
  total: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Order', Orderchema);
