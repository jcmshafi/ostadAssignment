const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

let books = [];

app.get('/books', (req, res) => {
    res.json(books);
});

app.post('/books', (req, res) => {
    const { title, author, publishedDate } = req.body;
    if (!title || !author) {
        return res.status(400).json({ message: 'Title and author are required' });
    }

    const id = Date.now().toString();
    const book = { id, title, author, publishedDate };
    books.push(book);

    res.status(201).json(book);
});

app.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    const index = books.findIndex((book) => book.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }

    books.splice(index, 1);

    res.json({ message: 'Book deleted successfully' });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
