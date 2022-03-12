// libs
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// routes
const router = require('./routers/router');

// configuration app
dotenv.config()
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Simple API Getway')
})

// config router 
app.use(router);

const port = process.env.PORT || 4000;

app.listen(port, ()=>{
    console.log(`Hashtags running on http://localhost:${port}`);
})