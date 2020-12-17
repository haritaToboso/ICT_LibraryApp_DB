const mongoose = require('mongoose');
//DB Connection
mongoose.connect('mongodb://localhost:27017/library');
//Schema
const Schema = mongoose.Schema;

const BookSchema =  new Schema({
     title: String,
     author: String,
     genre:String,
     image:String
});

//Model
var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;

