// authMiddleware.js

const jwt = require('jsonwebtoken');

// Secret key untuk token JWT
const SECRET_KEY = 'your_secret_key'; // Ganti dengan secret key yang lebih aman

/**
 * Middleware untuk memeriksa otentikasi
 */
const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization header missing or malformed' });
  }

  const token = authHeader.split(' ')[1]; // Mengambil token dari header

  try {
    const decoded = jwt.verify(token, SECRET_KEY); // Verifikasi token
    req.user = decoded; // Menyimpan data pengguna di req.user
    next(); // Melanjutkan ke middleware berikutnya
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

/**
 * Middleware untuk otorisasi admin
 */
const authorizeAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next(); // Pengguna memiliki hak akses admin
  } else {
    return res.status(403).json({ message: 'Access denied: Admins only' });
  }
};

module.exports = {
  authenticateUser,
  authorizeAdmin,
};
