const express = require('express');
const router = express.Router();

// config
const BASE_URL_FEEDS = "http://localhost:4020";
const apiAdapter = require('./../adapter/apiAdapter');
const apiCalled = apiAdapter(BASE_URL_FEEDS);

router.get('/hashtags', (req, res) => {
    apiCalled.get(req.path).then(resp => {
        res.send(resp.data);
    });
});

router.get('/hashtags/:name', (req, res) => {
    apiCalled.get(req.path).then(resp => {
        res.send(resp.data);
    });
});

module.exports = router;