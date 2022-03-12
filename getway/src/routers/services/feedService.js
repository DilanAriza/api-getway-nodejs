// libs
const express = require('express');
const router = express.Router();

// config
const BASE_URL_FEEDS = "http://localhost:4010";
const apiAdapter = require('./../adapter/apiAdapter');
const apiCalled = apiAdapter(BASE_URL_FEEDS);

router.get('/feeds', (req, res) => {
    apiCalled.get(req.path).then(resp => {
        res.send(resp.data);
    });
});

router.get('/feeds/:hashtag', (req, res) => {
    apiCalled.get(req.path).then(resp => {
        res.send(resp.data);
    });
});

router.post('/feeds', (req, res) => {
    apiCalled.get(req.path).then(resp => {
        res.send(resp.data);
    });
});

module.exports = router;