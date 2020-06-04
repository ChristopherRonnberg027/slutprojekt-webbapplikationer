import API from '@/api'

export const login = async function (context, userCredentials) {
    let user = await API.login(userCredentials);
    if (user) {
        context.commit('setUser', user);
    }
}