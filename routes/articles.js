var express = require('express');
var router = express.Router();

router.get('/', function (req, res){
    //console.log('heard');
    res.render('articles');
})

module.exports = router;