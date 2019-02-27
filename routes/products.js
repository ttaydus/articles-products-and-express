const express = require('express');
const router = express.Router();
const DS_Products = require('../db/products')

router.get('/', function (req, res) {
    let productList = DS_Products.getAllProducts();
    console.log(productList);
    res.render('products', { productList });
})

router.post('/', function (req, res) {
    let newProduct = req.body;
    console.log(newProduct);
    DS_Products.createProduct(
        newProduct.name,
        newProduct.price,
        newProduct.inventory
    );
    res.send({'great success, new product created': true})
})

module.exports = router;

