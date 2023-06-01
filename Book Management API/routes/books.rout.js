const express= require('express');
const bookController = require("../controllers/book.controller");

const router= express.Router();

router.get("/",bookController.getAllBooks);
router.get("/:id",bookController.getABookById);
router.post("/",bookController.createBook);
router.delete("/:id",bookController.deleteBook);
router.patch("/:id",bookController.updateBook);

module.exports = router;

