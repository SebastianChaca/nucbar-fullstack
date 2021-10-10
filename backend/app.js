const express = require('express');

const morgan = require('morgan');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
//MIDDLEWARES
app.use(express.json());
app.use(morgan('dev'));

//ROUTES
app.use('/users', userRouter);
app.use('/products', productRouter);

module.exports = app;
