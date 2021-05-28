const express = require('express');
const router = require('./routes/router');

/*Aqui, usa-se o Cors para liberar o cross-domain*/
const cors = require('cors')

 
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + '/views'))

app.use('/', router)
module.exports = app;