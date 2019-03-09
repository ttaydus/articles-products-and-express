const express = require('express');
const router = express.Router();
const DS_Products = require('../db/products')

// renders product list
router.get('/', function (req, res) {
    let productList = DS_Products.getAllProducts();
    // console.log(productList);
    res.render('products', { productList });
})

// 
router.get('/new', (req, res) => {
    res.render('newProduct');
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
    // res.render('products', { productList });
})

module.exports = router;

