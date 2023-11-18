import axios from 'axios'
import swal from 'sweetalert'

// Action to place an order
export const placeOrder = (token, totalPrice) => async (dispatch, getState) => {
    dispatch({ type: 'PLACE_ORDER_REQUEST' })
    const currentUser = getState().loginUserReducer.currentUser
    const cartItems = getState().cartReducer.cartItems
    try {
        const response = await axios.post('/api/orders/placeorder', { token, totalPrice, currentUser, cartItems })
        dispatch({ type: 'PLACE_ORDER_SUCCESS' })
        console.log(response)
        // swal('success','We have successfully received your order')
        // setTimeout( function () {
        //     window.location.href = '/orders'
        // }, 3000)
    } catch (error) {
        dispatch({ type: 'PLACE_ORDER_FAILED' })
        console.log(error);
    }
}

// Action to get orders for the current user
export const getUserOrders = () => async (dispatch, getState) => {
    const currentUser = getState().loginUserReducer.currentUser
    dispatch({ type: 'GET_USER_ORDERS_REQUEST' })
    try {
        const response = await axios.post('/api/orders/getuserorders', { userid: currentUser._id })
        console.log(response);
        dispatch({ type: 'GET_USER_ORDERS_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_USER_ORDERS_FAILED', payload: error })
    }
}

// Action to get all orders (admin)
export const getAllOrders = () => async (dispatch, getState) => {
    //const currentUser = getState().loginUserReducer.currentUser
    dispatch({ type: 'ALL_ORDERS_REQUEST' })
    try {
        const response = await axios.get('/api/orders/alluserorder')
        dispatch({ type: 'ALL_ORDERS_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'ALL_ORDERS_FAILED', payload: error })
    }
}

// Action to mark an order as delivered (admin)
export const deliverOrder = (orderid) => async (dispatch, getState) => {
    dispatch({ type: 'GET_ALL_ORDERS_REQUEST' })
    try {
        const response = await axios.post('/api/orders/deliverorder', {orderid})
        console.log(response);
        const orders = await axios.get('/api/orders/alluserorder')
        dispatch({ type: 'GET_ALL_ORDERS_SUCCESS', payload: orders.data })
        // Notification message
        swal('success','Pizza has been delivered successfully')
        setTimeout( function () {
            window.location.href = '/admin/orderlist'
        }, 3000)
    } catch (error) {
        dispatch({ type: 'GET_ALL_ORDERS_FAILED', payload: error })
    }
}

// Action to delete an order
export const deleteOrder = (orderId) => async (dispatch) => {
    try {
        const res = await axios.post('/api/orders/deleteorder', { orderId })
        swal("Order deleted successfully", "success")
        console.log(res);
        setTimeout( function () {
            window.location.href= "/admin/orderlist"
        }, 3000)
    } catch (error) {
        swal("Error while deleting Order!", "warning")
    }
}