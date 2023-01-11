const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use('/',(request,response,next) => {
    response.status(404).send('<h1>404 NOT FOUND</h1>');
});

app.listen(3000);
