const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Sample book data
let books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
];

// GET /books - return all books
app.get('/books', (req, res) => {
  res.json(books);
});

// POST /books - add a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;

  // Basic validation
  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required." });
  }

  // Create new book object
  const newBook = {
    id: books.length + 1, // Simple auto-increment
    title,
    author
  };

  // Add to books array
  books.push(newBook);

  // Return the newly added book
  res.status(201).json(newBook);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
