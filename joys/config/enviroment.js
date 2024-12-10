require('dotenv').config(); // Menggunakan dotenv untuk memuat variabel lingkungan dari file .env

const environment = {
  // Variabel yang berhubungan dengan database
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/joys', // Default jika tidak ada MONGO_URI di .env

  // Pengaturan server
  port: process.env.PORT || 5000, // Default port ke 5000 jika tidak diatur

  // Kunci API atau pengaturan lain
  secretKey: process.env.SECRET_KEY || 'mySecretKey', // Ganti dengan kunci yang lebih aman

  // Pengaturan untuk lingkungan (development/production)
  environment: process.env.NODE_ENV || 'development', // Default ke 'development'
};

module.exports = environment;
