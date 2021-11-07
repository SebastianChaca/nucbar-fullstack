const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
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
    image: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, 'Product must have a price'],
    },
    category: {
      type: String,
      required: [true, 'Product must have a category'],
    },
    brand: {
      type: String,
      required: [true, 'Product must have a brand'],
    },
    stock: {
      type: Number,
      required: [true, 'Product must have stock'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
  }
);
ProductSchema.virtual('hasStock').get(function () {
  return this.stock > 0;
});
// ProductSchema.pre(/^find/, function (next) {
//   this.find({ stock: { $ne: this.stock > 0 } });

//   next();
// });
module.exports = mongoose.model('Product', ProductSchema);
