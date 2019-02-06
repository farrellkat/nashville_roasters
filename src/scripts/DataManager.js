/*
    1. GET /products
    2. GET /sizes
    3. POST /orders
    4. GET /orders
*/

const getProducts = () => {
    return fetch("http://127.0.0.1:8088/products")
        .then(res => res.json())
}
const getOrders = () => {
    return fetch("http://127.0.0.1:8088/orders")
        .then(res => res.json())
}
const getSizes = () => {
    return fetch("http://127.0.0.1:8088/sizes")
        .then(res => res.json())
}
const createOrder = (orderObject) => {
    return fetch("http://127.0.0.1:8088/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(orderObject)
    })
        .then(res => res.json())
}

const cantSeeMeHaHa = () => {}

export { getOrders, getProducts, getSizes, createOrder }
