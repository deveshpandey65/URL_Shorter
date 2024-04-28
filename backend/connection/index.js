const mongoose = require('mongoose');

const connection = () => {
    mongoose.connect('mongodb://localhost:27017/url_sort')
        .then(() => console.log("DATABASE CONNECTED"))
        .catch((err) => console.log("Error:", err));
};

module.exports = connection;
