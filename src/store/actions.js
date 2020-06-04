import API from '@/api'

export const login = async function (context, userCredentials) {
    let user = await API.login(userCredentials);
    if (user) {
        context.commit('setUser', user);
    }
}

export const register = async function (context, newUser) {
    let user = await API.register(newUser);
    if (user) {
        context.commit('setUser', user);
    }
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