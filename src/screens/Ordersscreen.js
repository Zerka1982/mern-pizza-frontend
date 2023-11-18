import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../actions/orderActions';
import Loading from '../components/Loading';
import Error from '../components/Error';

// Define the Orderscreen component
export default function Orderscreen() {
  const dispatch = useDispatch(); // Redux dispatch function
  const orderstate = useSelector(state => state.getUserOrdersReducer); // Select user orders state
  const { orders, error, loading } = orderstate; // Destructure order state

  useEffect(() => {
    // Fetch user orders when the component mounts
    dispatch(getUserOrders());
  }, [dispatch]);

  return (
    <div>
      <h2 className='m-4' style={{ fontSize: '35px', color: 'white' }}>My orders</h2>
      <div className='row justify-content-center'>
        {loading && (<Loading />)} {/* Display loading spinner if loading */}
        {error && (<Error />)} {/* Display error message if there is an error */}
        {orders && orders.map(order => { // Map and display user orders
          return (
            <div className='col-md-8' key={order._id}>
              <div key={order._id} className='flex-container p-2 rounded' style={{ color: 'white', backgroundColor: 'rgb(97 95 95 / 50%)' }}>
                <div className='col-5' style={{ textAlign: 'left' }}>
                  <h2 style={{ fontSize: '28px', color: '#07fb0c' }}>Items</h2>
                  <hr></hr>
                  {order.orderItems.map(item => {
                    return (
                      <div key={item._id}>
                        <p>{item.name} [{item.size}] * {item.quantity} = {item.price} € </p>
                      </div>
                    )
                  })}
                </div>
                <div className='w-100 m-1' style={{ textAlign: 'left' }}>
                  <h2 style={{ fontSize: '25px', color: '#07fb0c' }}>Address</h2>
                  <hr></hr>
                  <p>{order.shippingAddress.street}</p>
                  <p>{order.shippingAddress.city}</p>
                  <p>{order.shippingAddress.country}</p>
                  <p>{order.shippingAddress.pincode}</p>
                </div>
                <div className='w-100 m-1' style={{ textAlign: 'left' }}>
                  <h2 style={{ fontSize: '25px', color: '#07fb0c' }}>Order Info</h2>
                  <hr></hr>
                  <p>Order amount: {order.orderAmount} €</p>
                  <p>Date: {order.createdAt.substring(0, 10)}</p>
                  <p>Tran_ID: {order.transactionId.substring(5,)}</p>
                  <p>Order_ID: {order._id}</p>
                </div>
              </div>
              <br></br>
            </div>
          );
        })}
      </div>
    </div>
  );
}
