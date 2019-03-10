const express = require('express');
const router = express.Router();
const DS_Products = require('../db/products')
const knex = require('../database')

// renders product list
router.get('/', function (req, res) {
    // let productList = DS_Products.getAllProducts();
    // // console.log(productList);
    // res.render('products', { productList });
    
    knex.select().from('products')
    .then((products) => {
    // console.log(products);
    // console.log('process.env', process.env);
    res.render('products', { products })
    });
})

// Add New Product button links to create a product form
router.get('/new', (req, res) => {
    res.render('newProduct');
})

// renders an individual product
router.get('/:id', function (req, res) {
    const productID = req.params.id;
    // console.log('req.params....',req.params.id)
    knex.select().from('products').where('id', productID)
    .then((products) => {
    // console.log(products);
    // console.log('process.env', process.env);
    let productObj = products[0];
    res.render('productDetails', productObj)
    });
})

router.post('/new', function (req, res) {
    console.log('req.body.price', req.body)
    let addProduct = req.body;
    knex('products').insert({name: addProduct.name, price: addProduct.price, inventory: addProduct.inventory
    }).then(() => {
        console.log('made it')
    })}
);


// router.post('/', function (req, res) {
//     let newProduct = req.body;
//     // console.log(newProduct);
//     DS_Products.createProduct(
//         newProduct.name,
//         newProduct.price,
//         newProduct.inventory
//     );
//     res.send({'great success, new product created': true})
//     // res.render('products', { productList });
// })

module.exports = router;

