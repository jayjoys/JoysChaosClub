// Fungsi untuk Menampilkan Detail Produk
function loadProductDetails() {
    const productDetailsContainer = document.querySelector(".product-details");

    // Ambil ID produk dari Local Storage (jika ada)
    const selectedProductId = localStorage.getItem("selectedProductId");

    if (!selectedProductId) {
        // Jika tidak ada produk yang dipilih, tampilkan pesan default
        productDetailsContainer.innerHTML = `
            <p style="color: #D4AF37; text-align: center; margin-top: 20px;">
                No product selected. Please go back to the shop and choose a product.
            </p>
        `;
        return;
    }

    // Placeholder untuk Data Produk (Belum Ditambahkan)
    productDetailsContainer.innerHTML = `
        <p style="color: #D4AF37; text-align: center; margin-top: 20px;">
            Product details will be displayed here once products are added.
        </p>
    `;
}

// Jalankan Fungsi Load Product Details saat Halaman Dimuat
document.addEventListener("DOMContentLoaded", () => {
    loadProductDetails();
});
