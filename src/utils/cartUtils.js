export const getCart = () => {
    try {
        const cart = localStorage.getItem('smart_cart');
        return cart ? JSON.parse(cart) : [];
    } catch (e) {
        console.error("Error reading cart from localStorage", e);
        return [];
    }
};

export const saveCart = (cart) => {
    try {
        localStorage.setItem('smart_cart', JSON.stringify(cart));
        // Dispatch a custom event so other components can listen for cart changes
        window.dispatchEvent(new Event('cartUpdated'));
    } catch (e) {
        console.error("Error saving cart to localStorage", e);
    }
};

export const addToCart = (product) => {
    const cart = getCart();
    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart(cart);
};

export const removeFromCart = (productId) => {
    const cart = getCart();
    const newCart = cart.filter(item => item.id !== productId);
    saveCart(newCart);
};

export const clearCart = () => {
    localStorage.removeItem('smart_cart');
    window.dispatchEvent(new Event('cartUpdated'));
};
