// server.js
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// In-memory storage for books
let books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 2, title: "1984", author: "George Orwell" }
];

// GET /books → Retrieve all books
app.get("/books", (req, res) => {
  res.status(200).json(books);
});

// POST /books → Add a new book
app.post("/books", (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ message: "Title and Author are required." });
  }

  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT /books/:id → Update a book by ID
app.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return res.status(404).json({ message: "Book not found." });
  }

  if (title) book.title = title;
  if (author) book.author = author;

  res.status(200).json(book);
});

// DELETE /books/:id → Remove a book by ID
app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const bookIndex = books.findIndex((b) => b.id === parseInt(id));

  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found." });
  }

  const deletedBook = books.splice(bookIndex, 1);
  res.status(200).json({ message: "Book deleted successfully", book: deletedBook[0] });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
