const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const app = express();
const PORT = 8080;
const articles = require('./routes/articles');
const products = require('./routes/products');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/articles', articles);
app.use('/products', products);
app.engine('hbs', hbs({
    defaultLayout: 'home',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
})