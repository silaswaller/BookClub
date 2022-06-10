const BookController = require("../controllers/book.controller");

module.exports = (app) => {

    app.get("/api/books", BookController.findAllBooks);

    app.post("/api/books", BookController.createNewBook);

    app.get("/api/books/:id", BookController.findOneBook);

    app.delete("/api/books/:id", BookController.deleteOneBook);

    app.put("/api/books/:id", BookController.updateOneBook);

}