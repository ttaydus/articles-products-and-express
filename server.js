const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const app = express();
const PORT = 8080;
const articles = require('./routes/articles');
const products = require('./routes/products');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.use('/articles', articles);
app.use('/products', products);

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
})

