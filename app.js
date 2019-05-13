const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

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