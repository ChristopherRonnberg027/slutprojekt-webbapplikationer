export const addToCart = (state, payload) => {
    state.cart.push(payload);
}

export const setUser = (state, user) => {
    state.user = user;
}