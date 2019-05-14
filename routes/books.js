const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/', (req, res) => {
    res.send('We are inside books');
});

router.post('/', (req, res) => {
    console.log(req.body);
    const book = new Book({
        title: req.body.title,
        authors: req.body.authors,
        description: req.body.description,
        image: req.body.image,
        categories: req.body.categories,
        price: req.body.price
    });

    book.save()
    .then(data => { res.json(data) })
    .catch(err => { res.json({ message: err }) });
});

module.exports = router;