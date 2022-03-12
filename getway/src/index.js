// libs
const express = require('express');
const bodyParser = require('body-parser');

// routes
const router = require('./routers/router');

// configuration app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Simple API Getway')
})

// config router 
app.use(router);

app.listen(3000, ()=>{
    console.log('API Getway running on http://localhost:3000');
})