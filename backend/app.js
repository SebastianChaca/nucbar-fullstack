const express = require('express');
const AppError = require('./utils/appError');
const morgan = require('morgan');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');
const orderRouter = require('./routes/orderRoutes');

const app = express();
//MIDDLEWARES
app.use(express.json());
app.use(morgan('dev'));

//ROUTES
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);
app.all('*', (res, req, next) => {
  next(new AppError(`Ruta no encontrada`));
});
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
