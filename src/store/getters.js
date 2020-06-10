export const cartTotalPrice = (state) => {
  let total = 0
  state.cart.forEach(cartItem => {
    total += cartItem.product.price * cartItem.quantity;
  });
  return total;
}

export const productById = (state) => (id) => {
  return state.products.find(product => product._id == id)
}

export const amountOfItems = (state) => {
  return state.cart.map(cartItem => cartItem.quantity).reduce(((acc, current) => acc + current), 0)
}