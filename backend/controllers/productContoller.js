const Product = require('../models/productModel');
const APIFeatures = require('../utils/apiFeatures');
exports.stockProducts = (req, res, next) => {
  req.query = { stock: { gte: 1 } };

  next();
};

exports.getProducts = async (req, res) => {
  try {
    const features = new APIFeatures(Product.find(), req.query).filter();
    const products = await features.query;
    console.log(req.query);
    res.status(200).json({
      status: 'success',
      results: products.length,
      data: {
        product: products,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      messege: err,
    });
  }
};
exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      messege: err,
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      messege: err,
    });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(201).json({
      status: 'success',
      data: {
        product: updatedProduct,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      messege: err,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: 'success',
      data: {
        product: deletedProduct,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      messege: err,
    });
  }
};
