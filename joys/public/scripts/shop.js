// Fungsi untuk Memuat Produk (Saat Ini Kosong)
function loadProducts() {
    const productList = document.querySelector(".product-list");

    // Jika belum ada produk, tampilkan pesan default
    const noProductsMessage = document.createElement("p");
    noProductsMessage.textContent = "No products available at the moment.";
    noProductsMessage.style.color = "#D4AF37";
    noProductsMessage.style.textAlign = "center";
    noProductsMessage.style.marginTop = "20px";
    productList.appendChild(noProductsMessage);
}

// Jalankan Fungsi Load Products saat Halaman Dimuat
document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
});
