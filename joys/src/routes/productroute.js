// productsRoutes.js

const express = require('express');
const productsController = require('./productsController');

const router = express.Router();

// Mendapatkan semua produk
router.get('/products', (req, res) => {
  const products = productsController.getAllProducts();
  res.status(200).json(products);
});

// Mendapatkan detail produk berdasarkan ID
router.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = productsController.getProductById(productId);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Menambahkan produk baru
router.post('/products', (req, res) => {
  const { id, name, price, description, image, inStock } = req.body;

  if (!id || !name || !price) {
    return res.status(400).json({ message: 'ID, name, and price are required' });
  }

  const newProduct = {
    id,
    name,
    price,
    description: description || '',
    image: image || '',
    inStock: inStock !== undefined ? inStock : true,
  };

  productsController.addProduct(newProduct);
  res.status(201).json({ message: 'Product added successfully', product: newProduct });
});

// Menghapus produk berdasarkan ID
router.delete('/products/:id', (req, res) => {
  const productId = req.params.id;

  const success = productsController.deleteProductById(productId);

  if (success) {
    res.status(200).json({ message: 'Product deleted successfully' });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Memperbarui produk berdasarkan ID
router.put('/products/:id', (req, res) => {
  const productId = req.params.id;
  const updatedData = req.body;

  const updatedProduct = productsController.updateProductById(productId, updatedData);

  if (updatedProduct) {
    res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

module.exports = router;
