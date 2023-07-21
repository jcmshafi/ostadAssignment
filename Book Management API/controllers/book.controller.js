const Book = require("../models/book.schema.modul");

exports.getAllBooks =async(req,res) => {
    try {
        const book = await Book.find();
        res.send(book);
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})

    }
}
exports.getABookById =async(req,res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book){
            res.send(book)
        }else {
            res.status(404).json({error: "Book not found"})
        }
        res.send(book);
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})

    }
}
exports.createBook =async(req,res) => {
    try {
        const book = new Book(req.body);
       await book.save();
        res.status(200).send(book);
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})

    }
}
//deleteBook a book
exports.deleteBook =async(req,res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (book){
            res.status(204)
        }else {
            res.status(404).json({error: "Book not found"})
        }
        res.send(book);
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})

    }
}
exports.updateBook =async(req,res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if (book){
            res.status(200).send(book);
        }else {
            res.status(404).json({error: "Book not found"})
        }
        res.send(book);
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})

    }
}