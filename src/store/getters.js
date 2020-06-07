export const getCartLength = (state) => {
    console.log(state)
    return 6;
    // return state.cart.length;
}

export const cartTotalPrice = (state) => {
    let total = 0
    state.cart.forEach(cartItem => {
      total += cartItem.product.price * cartItem.quantity;
    });
    return total;
  }

export const productById = (state) => (id) => {
  return state.products.find(product => product._id==id)
}