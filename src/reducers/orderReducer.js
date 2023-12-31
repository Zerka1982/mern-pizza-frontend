// Reducer for placing an order.
export const placeOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PLACE_ORDER_REQUEST':
            return {
                loading: true
            };
        case 'PLACE_ORDER_SUCCESS':
            return {
                loading: false,
                success: true
            };
        case 'PLACE_ORDER_FAILED':
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

// Reducer for getting a user's orders.
export const getUserOrdersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case 'GET_USER_ORDERS_REQUEST':
            return {
                loading: true,
                ...state
            };
        case 'GET_USER_ORDERS_SUCCESS':
            return {
                loading: false,
                orders: action.payload
            };
        case 'GET_USER_ORDERS_FAILED':
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

// Reducer for getting all user orders.
export const allUserOrdersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case 'ALL_ORDERS_REQUEST':
            return {
                loading: true,
                ...state
            };
        case 'ALL_ORDERS_SUCCESS':
            return {
                loading: false,
                success: true,
                orders: action.payload
            };
        case 'ALL_ORDERS_FAILED':
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}
