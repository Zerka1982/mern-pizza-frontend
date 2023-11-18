import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions'
import Success from '../components/Success'
import Error from '../components/Error'
import Loading from '../components/Loading'

export default function Checkout({ totalPrice }) {
  // State to control button disabled status
  const [isButtonDisabled, setButtonDisabled] = useState(true)

  // Function to toggle button's disabled status
  const toggleButton = () => {
    setButtonDisabled(isButtonDisabled);
  };

  // Get cart state from Redux store
  const cartstate = useSelector(state => state.cartReducer)
  const cartItems = cartstate.cartItems

  // Get order state from Redux store
  const orderstate = useSelector((state) => state.placeOrderReducer)
  const { loading, error, success } = orderstate
  const dispatch = useDispatch()

  // Handle the token received from Stripe
  function tokenHandler(token) {
    console.log(token)
    dispatch(placeOrder(token, totalPrice))
  }
  return (
    <div>
      {loading && (<Loading />)}
      {error && (<Error error='Something went wrong...' />)}

      {success && (<Success success='Your order placed successfully' />)}
      {success && localStorage.removeItem("cartItems")}
      {success && window.location.reload()}

      <StripeCheckout
        amount={totalPrice * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey='pk_test_51NvliRCgnwqUGTIvkEgiwwqukv2G0BXPfw49RJxWq0w30R0enc48JKwVBDUSSJXJEsWWqKScBrrGS24SNI96vUTJ00zC7H32VE'
        currency='EUR'
      >
        {(cartItems.length === 0) ? (
          <button className='btn btn-danger btn-lg text-uppercase m-3'
            style={{ display: 'none' }}
          > Cart empty
          </button>
        ) : (
          <button className='btn btn-danger btn-lg text-uppercase m-3'>proceed to payment</button>
        )}

      </StripeCheckout>
    </div>
  )
}
