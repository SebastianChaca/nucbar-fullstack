const User = require('../models/userModel');
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
  try {
    const newUser = await User.create(req.body);
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
