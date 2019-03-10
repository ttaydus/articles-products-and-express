const express = require('express');
const router = express.Router();
const knex = require('../database')

// renders product list
router.get('/', function (req, res){
    knex.select().from('articles')
    .then((articles) => {
    console.log(articles);
    // console.log('process.env', process.env);
    res.render('articles', { articles })
    });
})

// renders article list
router.get('/:id', function (req, res) {
    const articleID = req.params.id;
    // console.log('req.params....',req.params.id)
    knex.select().from('articles').where('id', articleID)
    .then((articles) => {
    // console.log(products);
    // console.log('process.env', process.env);
    let articleObj = articles[0];
    res.render('articleDetails', articleObj)
    });
})

module.exports = router;