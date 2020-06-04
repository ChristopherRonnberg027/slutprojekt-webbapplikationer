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