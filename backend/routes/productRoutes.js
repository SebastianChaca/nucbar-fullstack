const express = require('express');
const productController = require('../controllers/productContoller');
const router = express.Router();

router
  .route('/stock')
  .get(productController.stockProducts, productController.getProducts);
router
  .route('/')
  .get(productController.getProducts)
  .post(productController.createProduct);

router
  .route('/:id')
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
