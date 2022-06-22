const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "The book title is required"],
    },
    author: {
        type: String,
        required: [true, "The author's name is required"]
    },
    coverArt: {
        type: String,
        required: [true, "Cover art is required"]
    },
    description: {
        type: String,
    },
}, {timestamps: true});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book