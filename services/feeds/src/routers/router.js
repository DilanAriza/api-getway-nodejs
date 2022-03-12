const express = require('express');
const router = express.Router();

router.use((req, res, next)=>{
    console.log('In feeds called: ' + req.path);
    next();
});

router.get('/feeds', (req, res) => {
    res.send('From feeds called: ' + req.path);
});

router.get('/feeds/:hashtag', (req, res) => {
    res.send('From feeds called: ' + req.path);
});

router.post('/feeds', (req, res) => {
    res.send('From feeds called: ' + req.path);
});

module.exports = router;