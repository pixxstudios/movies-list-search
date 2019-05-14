const express = require('express');
const app = express();
const mongoose = require('mongoose');
const booksRoute = require('./routes/books');
const bodyParser = require('body-parser');
require('dotenv/config');

// middlewares
app.use(bodyParser.json());
app.use('/books', booksRoute);

// home
app.get('/', (req, res) => {
    res.send('Hello World !!');
});

// connect to db
mongoose.connect(
process.env.DB_CONNECTION,
{ useNewUrlParser: true },
() => console.log('Connected to database'));

app.listen(4444, () => {
    console.log('Listening on port 4444');
})