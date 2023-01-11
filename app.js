const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use('/',(request,response,next) => {
    response.status(404).sendFile(path.join(__dirname, 'views', 'not-found.html'));
});

app.listen(3000);