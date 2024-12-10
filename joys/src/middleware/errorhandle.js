const express = require('express');
const { errorHandler, notFound } = require('./errorHandler');

const app = express();

// Middleware untuk body parsing, dll.
app.use(express.json());

// Tambahkan rute API Anda
app.get('/api/example', (req, res) => {
  res.json({ message: 'Example route' });
});

// Middleware untuk rute tidak ditemukan
app.use(notFound);

// Middleware untuk menangani error
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
