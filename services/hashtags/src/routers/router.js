const express = require('express');
const router = express.Router();

router.use((req, res, next)=>{
    console.log('In hashtag called: ' + req.path);
    next();
});

router.get('/hashtags', (req, res) => {
    res.send('From hashtags called: ' + req.path);
});

router.get('/hashtags/:name', (req, res) => {
    res.send('From feeds called: ' + req.path);
});

module.exports = router;