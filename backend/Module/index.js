const mongoose = require('mongoose');
const Schema = require('.././Schema').url_schema;

const url=mongoose.model('url_store',Schema);
module.exports={
    url,
}

