const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const authRoutes = require('./src/routes/auth');
const blogRoutes = require('./src/routes/blog');

//middleware untuk menerima body request dari client 
app.use(bodyParser.json()); // type json

// tambahakn ketikak client mengkases api kita untuk menghiindari kesalahan cors origin pada borwser
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-ORIGIN', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET','POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
})

app.use('/v1/auth', authRoutes);
app.use('/v1/blog', blogRoutes);
app.use((error, req, res, next ) => {
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({
        message: message,
        data:data
    })
})

app.listen(4000);