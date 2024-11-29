const express = require("express")
const router = express.Router()
const booksController = require("../Controllers/books")
const authorization = require("../middileware/auth")

//api to get all books  (login)

router.get("/api/books/" , authorization,booksController.getAllBooks )

// api to get one books  (login)
router.get("/api/books/ :id"  ,authorization, booksController.getOneBook )

//api to delete a book - (admin)

router.delete("/api/books/:id" ,authorization, booksController.deleteBook )

// api to update a book (login)
router.put("/api/books/ :id"  , authorization,booksController.updateBook )

//api to add a book - (admin)
router.post("/api/books/"  ,authorization, booksController.cerateBook )








module.exports = router 

