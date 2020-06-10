import API from '@/api'

export const login = async function (context, userCredentials) {
    context.commit('toggleLoader')
    let user = await API.login(userCredentials);
    if (user) {
        context.commit('setUser', user);
    }
    context.commit('toggleLoader')
}

export const register = async function (context, newUser) {
    context.commit('toggleLoader')
    let user = await API.register(newUser);
    if (user) {
        context.commit('setUser', user);
    }
    context.commit('toggleLoader')
}

export const getProducts = async function (context) {
    let products = await API.getAllProducts();
    context.commit('setProducts', products);
}

export const getProduct = async function (context, id) {
    let product = await API.getSingleProduct(id);
    context.commit('setProduct', product);
}

export const logout = function (context) {
    context.commit('logout');
}

export const addToCart = function (context, product) {
    context.commit('addToCart', product);
}

export const removeFromCart = function (context, product) {
    context.commit('removeFromCart', product);
}

export const createProduct = async function (context, product) {
    let createdProduct = await API.createProduct(product, context.state.token)
    context.commit('addNewProduct', createdProduct)
}
export const editProduct = async function (context, product) {
    await API.editProduct(product, context.state.token)
    context.commit('editProduct', product)

}
export const deleteProduct = async function (context, id) {
    await API.deleteProduct(id, context.state.token)
    context.commit('deleteProduct', id)
}

export const createOrder = async function (context, newOrder) {
    context.commit('toggleLoader')
    await API.createOrder(newOrder, context.state.token);
    context.commit('clearCart');
    context.commit('toggleLoader')
}

export const getOrders = async function (context) {
    context.commit('toggleLoader')
    let orderHistory = await API.getOrders(context.state.token);
    context.commit('setUserOrderHistory', orderHistory);
    context.commit('toggleLoader')
}

export const setCartAndUser = function (context) {
    context.commit('setCartAndUser');
}