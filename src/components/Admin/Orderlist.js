import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteOrder, deliverOrder, getAllOrders } from './../../actions/orderActions'
import Loading from './../Loading'
import Error from './../Error'

export default function Orderlist() {
  // Get the list of orders from Redux state
  const allOrdersState = useSelector(state => state.allUserOrdersReducer)
  const { loading, orders, error } = allOrdersState
  const dispatch = useDispatch()

  // Fetch all orders when the component mounts
  useEffect(() => {
    dispatch(getAllOrders())
  }, [dispatch]);

  return (
    <div>
      <h2 style={{ color: 'white', fontSize: '35px' }}>Order List</h2>

      {loading && (<Loading />)}
      {error && (<Error error="Admin Order request failed, please Refresh" />)}

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Order ID</th>
            <th scope="col">Email</th>
            <th scope="col">User ID</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders && orders.map(order => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.email}</td>
              <td>{order.transactionId}</td>
              <td>{order.orderAmount} €</td>
              <td>{(order.createdAt).substring(0, 10)}</td>
              <td>{order.isDelivered ?
                (<div className="d-flex justify-content-center align-items-center" style={{}}>
                  {/* <h6 className='text-white bg-dark p-2'>Delivered </h6> */}
                  <img title='Already Delivered' src='https://cdn.pixabay.com/photo/2019/05/30/12/07/pizza-4239775_1280.png' style={{width: '45px', height: '40px'}} alt='delivered'/>
                  <i
                    className="fa-solid fa-trash-can"
                    title="Delete Order"
                    onClick={() => { dispatch(deleteOrder(order._id)) }}>
                  </i>
                </div>
                )
                : (<button
                  className='btn btn-info'
                  onClick={() => { dispatch(deliverOrder(order._id)) }}>Deliver Now
                </button>

                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
