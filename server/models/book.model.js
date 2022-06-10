const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "The book title is required"],
        unique: [true, "This book has already been added"],
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

BookSchema.plugin(uniqueValidator, { message: "This book has already been added" });

const Book = mongoose.model("Book", BookSchema);

module.exports = Book