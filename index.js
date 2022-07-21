const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const productRoutes = require('./src/routes/products');

//middleware untuk menerima body request dari client 
app.use(bodyParser.json()); // type json

// tambahakn ketikak client mengkases api kita untuk menghiindari kesalahan cors origin pada borwser
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-ORIGIN', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET','POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
})

app.use('/v1/costumer', productRoutes);

app.listen(4000);