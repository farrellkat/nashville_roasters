import { createOrder } from "./CreateOrder.js"

/*
    Use the `as` keyword to alias a function
    name from another module to use in this module
    when there is a naming conflict
*/
import { createOrder as postOrder } from "./DataManager.js"


const buyButton = document.querySelector("#placeOrder")

let postOrderOnClick = () => {
buyButton.addEventListener("click", () => {
    // Collect user input
    const name = document.querySelector("#customerName").value
    const quantity = document.querySelector("#quantityInput").value
    const productId = document.querySelector("#productOption").value
    const sizeId = document.querySelector("#sizeOption").value

    // Build order object from input
    const newOrderObject = createOrder(name, quantity, productId, sizeId)

    // POST to API (x)
    postOrder(newOrderObject)

    // Build new card from current order
   let createNewCard = (newOrderObject) => {
        return `
        <h1>Customer Name: ${newOrderObject.customerName}</h1>
        <div>Order: ${newOrderObject.productId}</div>
        <div>Size: ${newOrderObject.sizeId}</div>
        <div>Quantity: ${newOrderObject.quantity}</div>
        `
    }
    // Append new card to DOM
    let cardContainerEl = document.querySelector("#cardContainer")
    cardContainerEl.innerHTML += createNewCard(newOrderObject)
})
}
export { postOrderOnClick }