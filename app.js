//requires
require('./config/config');

//imports
const express = require('express');
var app = express();
const fs = require('fs');
const path = require('path');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' });
module.exports = upload;
//const cors = require('cors');
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

//routes
const pdf = require('./routes/route');

//static
const static_path = path.join(__dirname, "./public/index")

//middlewares
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false }));
////Enabling CORS
//app.use(cors());

app.use(express.static(static_path));
app.use('/pdf', pdf);

//server
app.listen(process.env.PORT, () => console.log(`server started at port: ${process.env.port}`));

