const createOrder = (name, productId, quantity, sizeId) => {
  return {
    customerName: name,
    quantity: quantity,
    productId: productId,
    sizeId: sizeId
  }
}

export { createOrder }
