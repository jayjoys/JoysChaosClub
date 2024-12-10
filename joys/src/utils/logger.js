const fs = require('fs');
const path = require('path');

// Tentukan lokasi file log
const logFilePath = path.join(__dirname, 'logs', 'app.log');

// Pastikan folder logs ada
if (!fs.existsSync(path.dirname(logFilePath))) {
  fs.mkdirSync(path.dirname(logFilePath), { recursive: true });
}

/**
 * Fungsi untuk mencatat log ke file
 * @param {string} level - Level log (e.g., INFO, ERROR, WARN)
 * @param {string} message - Pesan log
 */
const logToFile = (level, message) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level}] ${message}\n`;

  fs.appendFileSync(logFilePath, logMessage, 'utf8');
};

/**
 * Fungsi untuk mencatat log info
 * @param {string} message - Pesan log
 */
const info = (message) => {
  console.log(`[INFO]: ${message}`);
  logToFile('INFO', message);
};

/**
 * Fungsi untuk mencatat log error
 * @param {string} message - Pesan log
 */
const error = (message) => {
  console.error(`[ERROR]: ${message}`);
  logToFile('ERROR', message);
};

/**
 * Fungsi untuk mencatat log warning
 * @param {string} message - Pesan log
 */
const warn = (message) => {
  console.warn(`[WARN]: ${message}`);
  logToFile('WARN', message);
};

module.exports = { info, error, warn };
