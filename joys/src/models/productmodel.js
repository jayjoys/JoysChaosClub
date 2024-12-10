// productModel.js

/**
 * Model Produk
 * Representasi struktur data untuk produk.
 */
class Product {
    /**
     * Membuat instance baru dari Product.
     * @param {string} id - ID unik produk.
     * @param {string} name - Nama produk.
     * @param {number} price - Harga produk.
     * @param {string} description - Deskripsi produk.
     * @param {string} image - URL gambar produk (opsional).
     * @param {boolean} inStock - Status ketersediaan produk.
     */
    constructor(id, name, price, description = '', image = '', inStock = true) {
      if (!id || !name || !price) {
        throw new Error('ID, Name, dan Price adalah atribut wajib untuk Produk.');
      }
  
      this.id = id;
      this.name = name;
      this.price = price;
      this.description = description;
      this.image = image;
      this.inStock = inStock;
    }
  
    /**
     * Mengubah data produk menjadi JSON.
     * @returns {Object} - Representasi JSON dari produk.
     */
    toJSON() {
      return {
        id: this.id,
        name: this.name,
        price: this.price,
        description: this.description,
        image: this.image,
        inStock: this.inStock,
      };
    }
  }
  
  module.exports = Product;
  