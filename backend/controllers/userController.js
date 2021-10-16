const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const { generateToken } = require('../utils/apiAuth');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(201).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      messege: err,
    });
  }
};

exports.createUser = catchAsync(async (req, res) => {
  const newUser = await User.create({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    lastName: req.body.lastName,
  });
  const token = generateToken(newUser);
  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser,
    },
  });
});

exports.getUser = (req, res) => {
  console.log('get product');
};
exports.updateUser = (req, res) => {
  console.log('update product');
};

exports.deleteUser = (req, res) => {
  console.log('delete product');
};
