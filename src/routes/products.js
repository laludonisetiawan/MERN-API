const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products')


// CREATE => products
// router ini memanggil createProducts dari direktory controllers/products.js
router.post('/product', productsController.createProduct);

 // READ => products
 // GET router dengan endpoint /products
 router.get('/products', productsController.getAllProducts);


 module.exports = router;
