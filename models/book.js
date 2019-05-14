const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    image: {
        type: String,
        require: false
    },
    categories: {
        type: Array,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Book', BookSchema);