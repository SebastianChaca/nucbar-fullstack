const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
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
exports.createUser = async (req, res) => {
  const user = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });
  try {
    const newUser = await user.save();
    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      messege: err,
    });
  }
};

exports.getUser = (req, res) => {
  console.log('get product');
};
exports.updateUser = (req, res) => {
  console.log('update product');
};

exports.deleteUser = (req, res) => {
  console.log('delete product');
};
