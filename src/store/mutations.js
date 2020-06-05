export const addToCart = (state, product) => {
    let cartItemInCart = state.cart.find(cartItem => {
        return cartItem.product._id === product._id;
    });
    if (cartItemInCart) {
        cartItemInCart.quantity += 1;
    } else {
        state.cart.push({ quantity: 1, product: product })
    }
}

export const removeFromCart = (state, product) => {
    let cartItemInCart = state.cart.find(cartItem => {
        return cartItem.product._id === product._id;
    });
    cartItemInCart.quantity -= 1;
    if (cartItemInCart.quantity === 0) {
        state.cart = state.cart.filter(cartItem => {
            return cartItem.product._id != cartItemInCart.product._id;
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

export const addNewProduct = (state, newProduct) => {
    state.products.push(newProduct)
}

export const editProduct = (state, editedProduct) => {
    let oldProductIndex = state.products.findIndex(product => product._id === editedProduct._id)
    state.products[oldProductIndex] = editedProduct
}

export const deleteProduct = (state, id) => {
    state.products = state.products.filter(product => product._id !== id)
}

export const setUserOrderHistory = (state, orderHistory) => {
    state.user.orders = orderHistory;
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