// mongo.js

const mongoose = require('mongoose');
require('dotenv').config();

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => console.log('Error: ' + err));

module.exports = mongoose;