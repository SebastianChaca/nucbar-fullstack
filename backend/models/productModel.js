const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product must have a name'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'Product must have a description'],
  },
  shortDescription: {
    type: String,
    required: [true, 'Product must have a description'],
  },
  price: {
    type: String,
    required: [true, 'Product must have a price'],
  },
});

module.exports = mongoose.model('Product', ProductSchema);
