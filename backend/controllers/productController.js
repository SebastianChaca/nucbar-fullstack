const Product = require('../models/productModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.stockProducts = (req, res, next) => {
  req.query = { stock: { gte: 1 } };
  next();
};

exports.getProducts = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Product.find(), req.query).filter();
  const products = await features.query;

  res.status(200).json({
    status: 'success',
    results: products.length,
    data: {
      product: products,
    },
  });
});
exports.createProduct = catchAsync(async (req, res, next) => {
  const newProduct = await Product.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      product: newProduct,
    },
  });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new AppError('No se encontró un producto con ese id', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
});
exports.updateProduct = catchAsync(async (req, res, next) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  if (!updatedProduct) {
    return next(new AppError('No se encontró un producto con ese id', 404));
  }
  res.status(201).json({
    status: 'success',
    data: {
      product: updatedProduct,
    },
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.status(201).json({
    status: 'success',
    data: {
      product: deletedProduct,
    },
  });
});
