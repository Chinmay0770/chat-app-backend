const mongoose = require('mongoose');
require('dotenv').config();


const url = process.env.DB_URL;

mongoose.connect(url,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('connected to db')).catch((e)=> console.log('Error connecting db',e));