const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const productRouter = require('./routes/productRoutes');
const userRouter = require('./routes/userRoutes');

const path = require('path');

const app = express();
//MIDDLEWARES
app.use(express.json());

//ROUTES
app.use('/users', userRouter);
app.use('/products', productRouter);

module.exports = app;
