const CartState = (() => {
    // Key untuk Local Storage
    const CART_KEY = "joys_cart";

    // Mendapatkan keranjang dari Local Storage
    function getCart() {
        const cart = localStorage.getItem(CART_KEY);
        return cart ? JSON.parse(cart) : [];
    }

    // Menyimpan keranjang ke Local Storage
    function saveCart(cart) {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }

    // Menambahkan item ke keranjang
    function addItem(item) {
        const cart = getCart();
        const existingItem = cart.find(cartItem => cartItem.id === item.id);

        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            cart.push(item);
        }

        saveCart(cart);
    }

    // Menghapus item dari keranjang
    function removeItem(itemId) {
        let cart = getCart();
        cart = cart.filter(item => item.id !== itemId);
        saveCart(cart);
    }

    // Mendapatkan total jumlah item dalam keranjang
    function getTotalItems() {
        const cart = getCart();
        return cart.reduce((total, item) => total + item.quantity, 0);
    }

    // Menghapus seluruh isi keranjang
    function clearCart() {
        localStorage.removeItem(CART_KEY);
    }

    return {
        getCart,
        addItem,
        removeItem,
        getTotalItems,
        clearCart,
    };
})();
