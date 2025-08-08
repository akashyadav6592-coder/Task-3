const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Sample book data
let books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
];

// DELETE /books/:id - remove a book by ID
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);

  // Find the index of the book
  const index = books.findIndex(b => b.id === bookId);

  if (index === -1) {
    return res.status(404).json({ error: "Book not found." });
  }

  // Remove the book from the array
  const deletedBook = books.splice(index, 1)[0];

  res.json({ message: "Book deleted successfully.", book: deletedBook });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
