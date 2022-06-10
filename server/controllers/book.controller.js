const Book = require('../models/book.model');

module.exports = {

    findAllBooks: (req, res) => {
        Book.find().sort({title: 1})
            .then((allBooks) => {
                console.log(allBooks);
                res.json(allBooks);
            })
            .catch((err) => {
                console.log("findAllBooks has failed");
                console.log(err);
                res.json({ message: "Something went wrong in findAllBooks", error: err })
            })
    },

    createNewBook: (req, res) => {
        Book.create(req.body)
            .then((newBook) => {
                console.log(newBook);
                res.json(newBook);
            })
            .catch((err) => {
                console.log("createNewBook has failed");
                console.log(err);
                res.status(400).json({ message: "Something went wrong in createNewBook", error: err })
            })
    },

    findOneBook: (req, res) => {
        Book.findOne({_id: req.params.id})
            .then((oneBook) => {
                console.log(oneBook);
                res.json(oneBook);
            }) 
            .catch((err) => {
                console.log("findOneBook has failed");
                console.log(err);
                res.json({ message: "Something went wrong in findOneBook", error: err })
            })
    },

    deleteOneBook: (req, res) => {
        Book.deleteOne({_id: req.params.id})
            .then((deletedBook) => {
                console.log(deletedBook);
                res.json(deletedBook);
            })
            .catch((err) => {
                console.log("deleteOneBook has failed");
                console.log(err);
                res.json({ message: "Something went wrong in deleteOneBook", error: err })
            })
    },

    updateOneBook: (req, res) => {
        Book.findOneAndUpdate({_id: req.params.id}, 
            req.body,
            {new: true, runValidators: true} 
            )
            .then((updatedBook) => {
                console.log(updatedBook);
                res.json(updatedBook)
            })
            .catch((err) => {
                console.log("updateOneBook has failed");
                console.log(err);
                res.status(400).json({ message: "Something went wrong in updateOneBook", error: err })
            })
    }
}
