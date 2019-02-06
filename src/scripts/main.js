import { getOrders,
    getProducts,
    getSizes,
    createOrder } from "./DataManager.js"

import { postOrderOnClick } from "./EventListener.js"

let sizes = []
let products = []

getSizes().then(
    (arrayOfSizes) => {
        // 100% sure we have sizes
        // console.log(arrayOfSizes)
        sizes = arrayOfSizes
        //Grab sizes and put into option selector in DOM
        sizes.forEach(size => {
            let sizeToEnter = size.size
            document.querySelector("#sizeOption").innerHTML += 
            `<option value="${sizeToEnter}">${sizeToEnter}</option>`
        })
    }
).then(
    () => {
         return getProducts()
    }
)
.then(
    (productArray) => {
        products = productArray
        console.log(products)
        products.forEach(product => {
            let productToEnter = product.name
            document.querySelector("#productOption").innerHTML += 
            `<option value="${productToEnter}">${productToEnter}</option>`
        })
    }
)
postOrderOnClick()
