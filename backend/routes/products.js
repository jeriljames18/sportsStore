const express = require('express');
const router = express.Router();

const {getAllProducts,getProductsById} = require('../controller/productControllers')
//@desc GET all products from Database
//@route GET /api/products
router.get('/',getAllProducts)

//@desc GET a product from Database
//@route GET /api/products/:id
router.get('/:id',getProductsById)

module.exports = router;