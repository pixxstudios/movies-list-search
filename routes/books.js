const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/', (req, res) => {
    res.send('We are inside books');
});

router.post('/', (req, res) => {
    console.log(req.body);
});

module.exports = router;