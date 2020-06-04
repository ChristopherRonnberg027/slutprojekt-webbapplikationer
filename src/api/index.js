const URL = 'http://localhost:5000/api'

async function login(userCredentials) {
    let response = await fetch(URL + '/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userCredentials)
    })
    if (response.status === 403) {
        return null
    } else {
        let loggedInUser = await response.json()
        return loggedInUser
    }
}

async function register(user){
    let response = await fetch(URL + '/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    if (response.status === 400) {
        return null
    } else {
        return login({email: user.email, password: user.password});
    }

}

async function getAllProducts() {
    let response = await fetch(URL + '/products')
    let products = await response.json()
    return products
}

async function getSingleProduct(id) {
    let response = await fetch(URL + '/products/' + id)
    let singleProduct = await response.json()
    return singleProduct
}

async function createProduct(product, token){
    await fetch(URL+ '/products/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        },
        body: JSON.stringify(product)
    })
}
async function editProduct(product, token){
    await fetch(URL+ '/products/' + product._id,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        },
        body: JSON.stringify(product)
    })
}
async function deleteProduct(product, token){
    await fetch(URL+ '/products/' + product._id,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        },
    })
}
async function getOrders(token){
    let response=await fetch(URL+ '/orders',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        },
    })
    let orders = await response.json()
    return orders
}
async function createOrder(order,token){
    await fetch(URL+ '/orders',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        },
        body: JSON.stringify(order)
    })
}

export default {login,register, getAllProducts,getSingleProduct,createProduct,editProduct,deleteProduct,getOrders,createOrder}

