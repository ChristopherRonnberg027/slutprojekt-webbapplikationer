export const addToCart = (state, product) => {
    let cartItemInCart = state.cart.find(cartItem => {
        return cartItem.product._id === product._id;
    });
    if (cartItemInCart) {
        cartItemInCart.quantity += 1;
    } else {
        state.cart.push({ quantity: 1, product: product })
    }
    localStorage.setItem('cart', JSON.stringify(state.cart))
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
    localStorage.setItem('cart', JSON.stringify(state.cart))
}

export const clearCart = (state) => {
    state.cart = []
    localStorage.removeItem('cart')
}

export const setUser = (state, user) => {
    state.user = user.user;
    state.token = user.token;
    sessionStorage.setItem('user', JSON.stringify(state.user))
    sessionStorage.setItem('token', JSON.stringify(state.token))
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
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('token')
}
export const setCartAndUser = (state) => {
    
    if (!state.user && sessionStorage.getItem('user')) {
        state.user = JSON.parse(sessionStorage.getItem('user'));
        state.token = JSON.parse(sessionStorage.getItem('token'));
    }
    if (!state.cart.length && localStorage.getItem('cart')) {
        state.cart = JSON.parse(localStorage.getItem('cart'));
    }
}

export const toggleLoader = (state) => {
    state.loader=!state.loader
}