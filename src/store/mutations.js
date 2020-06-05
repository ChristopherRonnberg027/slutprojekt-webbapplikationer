export const addToCart = (state, product) => {
    let cartItemInCart = state.cart.find(cartItem => {
        return cartItem.product._id === product._id;
    });
    if (cartItemInCart) {
        cartItemInCart.quantity += 1;
    } else {
        state.cart.push({quantity: 1, product: product})
    }
}

export const removeFromCart = (state, product) => {
    let cartItemInCart = state.cart.find(cartItem => {
        return cartItem.product._id === product._id;
    });
    cartItemInCart.quantity -= 1;
    if (cartItemInCart.quantity === 0) {
        state.cart = state.cart.filter(cartItem => {
            return cartItem._id != cartItemInCart._id;
        });
    }
}

export const clearCart = (state) => {
    state.cart = []
} 

export const setUser = (state, user) => {
    state.user = user.user;
    state.token = user.token;
}

export const setProducts = (state, products) => {
    state.products = products;
}

export const setProduct = (state, product) => {
    state.product = product;
}

export const logout = (state) => {
    state.user = null;
}