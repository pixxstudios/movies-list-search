const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/',async (req, res) => {
    const books = await Book.find();
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.json(books);
});

router.post('/', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        authors: req.body.authors,
        description: req.body.description,
        image: req.body.image,
        categories: req.body.categories,
        price: req.body.price
    });

    try {
        const savedBook = await book.save();
        res.json(savedBook);
    } catch(err) {
        res.json({ message: err });
    };
});

module.exports = router;