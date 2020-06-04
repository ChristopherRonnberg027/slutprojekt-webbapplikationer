export const addToCart = (state, payload) => {
    state.cart.push(payload);
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

