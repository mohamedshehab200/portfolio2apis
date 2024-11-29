const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookschema = new Schema({
    name: String,
    author : String,
    description: String,
    price: Number,
 
});






module.exports = mongoose.model("books", bookschema )
