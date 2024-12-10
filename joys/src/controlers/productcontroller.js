// productsController.js

// Simulasi database produk
const products = [];

/**
 * Mendapatkan semua produk.
 * @returns {Array} - Daftar semua produk.
 */
function getAllProducts() {
  return products;
}

/**
 * Menambahkan produk baru.
 * @param {Object} product - Objek produk dengan properti seperti `id`, `name`, `price`, dan `description`.
 * @returns {Object} - Produk yang telah ditambahkan.
 */
function addProduct(product) {
  if (!product.id || !product.name || !product.price) {
    throw new Error("Product must have an id, name, and price.");
  }
  products.push(product);
  return product;
}

/**
 * Mendapatkan produk berdasarkan ID.
 * @param {string} id - ID produk yang dicari.
 * @returns {Object|null} - Produk yang ditemukan, atau `null` jika tidak ada.
 */
function getProductById(id) {
  return products.find((product) => product.id === id) || null;
}

/**
 * Memperbarui produk berdasarkan ID.
 * @param {string} id - ID produk yang akan diperbarui.
 * @param {Object} updatedProduct - Objek produk dengan data yang diperbarui.
 * @returns {Object|null} - Produk yang diperbarui, atau `null` jika tidak ditemukan.
 */
function updateProduct(id, updatedProduct) {
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex === -1) {
    return null;
  }
  products[productIndex] = { ...products[productIndex], ...updatedProduct };
  return products[productIndex];
}

/**
 * Menghapus produk berdasarkan ID.
 * @param {string} id - ID produk yang akan dihapus.
 * @returns {boolean} - `true` jika berhasil dihapus, `false` jika tidak ditemukan.
 */
function deleteProduct(id) {
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex === -1) {
    return false;
  }
  products.splice(productIndex, 1);
  return true;
}

// Ekspor fungsi untuk digunakan di modul lain
module.exports = {
  getAllProducts,
  addProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
