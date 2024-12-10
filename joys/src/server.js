const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const logger = require('./logger'); // Logger custom
const { errorHandler } = require('./errorHandler'); // Middleware untuk error handling
const productsRoutes = require('./productsRoutes'); // Rute untuk produk

// Konfigurasi dotenv
dotenv.config();

const app = express();

// Middleware global
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger untuk request menggunakan morgan
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  logger.info('Morgan logging enabled in development mode');
}

// Rute API utama
app.use('/api/products', productsRoutes);

// Rute Home Page (opsional)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Middleware untuk handling error
app.use(errorHandler);

// Tentukan port server
const PORT = process.env.PORT || 5000;

// Jalankan server
app.listen(PORT, () => {
  logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

