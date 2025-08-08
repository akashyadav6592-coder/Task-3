// Import Express
const express = require('express');
const app = express();
const port = 3000;

// Sample book data
const books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
];

// GET /books endpoint
app.get('/books', (req, res) => {
  res.json(books);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
