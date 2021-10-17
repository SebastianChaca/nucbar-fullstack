const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const { generateToken, verifyToken } = require('../utils/apiAuth');

exports.signup = catchAsync(async (req, res) => {
  const newUser = await User.create({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    lastName: req.body.lastName,
    passwordChangedAt: req.body.passwordChangedAt,
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

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError('Por favor ingrese un email y/o password', 400));
  }
  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Password o email incorrecto', 401));
  }
  const token = generateToken(user);

  res.status(200).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(new AppError('Acceso solo para usarios registrados', 401));
  }
  const decoded = await verifyToken(token);

  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(new AppError('El usuario ya no existe.', 401));
  }
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(new AppError('La contraseña cambió, ingrese de nuevo.', 401));
  }
  req.user = currentUser;
  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('No tiene permiso para realizar esta accion', 403)
      );
    }
    next();
  };
};

exports.forgotPassword = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError('No hay usuario con ese email', 404));
  }
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });
};

exports.resetPassword = (req, res, next) => {};
