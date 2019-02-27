const express = require('express');
const router = express.Router();
const container = {};

router.post('/', function (req, res) {
    container['name'] = req.body.name;
    container['price'] = req.body.price;
    container['inventory'] = req.body.inventory;
    console.log(container);
    res.send({'great success': true})
})

router.get('/', function (req, res) {
    res.render('products');
})

module.exports = router;