// Action to add a pizza to the cart
export const addToCart = (pizza, quantity, size) => (dispatch, getState) => {
    // Create a cart item
    let cartItem = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        size: size,
        quantity: Number(quantity),
        prices: pizza.prices,
        price: pizza.prices[0][size] * quantity
    }
    // Check quantity limits
    if (cartItem.quantity > 10) {
        alert("You cannot add more than 10 pizzas")
    } else if (cartItem.quantity < 1) {
        alert("You should add at least 1 pizza")
    } else {
        // Dispatch action to add to the cart
        dispatch({ type: 'ADD_TO_CART', payload: cartItem })
    }
    // Update cart items in local storage
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

// Action to delete a pizza from the cart
export const deleteFromCart = (pizza) => (dispatch, getState) => {
    // Dispatch action to delete from the cart
    dispatch({ type: 'DELETE_FROM_CART', payload: pizza })

    // Update cart items in local storage
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}