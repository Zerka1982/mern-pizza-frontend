// Cart reducer handles the state related to the shopping cart.
// It manages the items in the cart and handles actions like adding and deleting items.
export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        // Action to add an item to the cart
        case 'ADD_TO_CART':
            // Check if the item already exists in the cart
            const alreadyExists = state.cartItems.find(item => item._id === action.payload._id);
            if (alreadyExists) {
                // If it exists, update the item in the cart
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item._id === action.payload._id ? action.payload : item)
                }
            } else {
                // If it's a new item, add it to the cart
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                }
            }
        // Action to delete an item from the cart
        case 'DELETE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item._id !== action.payload._id)
            }
        default:
            return state;
    }
}
