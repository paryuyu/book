const mongoose = require("mongoose");

const BookmarkSchema = new mongoose.Schema({
    title: String,
    author: String,
    publisher : String,
    pubDate : String,
    cover : String,
    createdAt: Date,
    isbn:{type: String, unique: true},
    description:{type: String}
})

module.exports = mongoose.model("bookmark", BookmarkSchema )