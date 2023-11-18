import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, deleteFromCart } from '../actions/cartActions'
import pizzaLogo from '../assets/images/pizza-preview.png'
import Checkout from '../components/Checkout'

export default function Cartscreen() {
    // Get the cart state and cart items using the useSelector hook.
    const cartstate = useSelector(state => state.cartReducer)
    const cartItems = cartstate.cartItems

    // Calculate the total price of items in the cart.
    let totalPrice = cartItems.reduce((x, item) => x + item.price, 0)
    const dispatch = useDispatch()

    return (
        <div className='row justify-content-center mt-5'>
            <div className='col-md-6'>
                <h2 style={{ fontSize: '35px', color: 'white', marginBottom: '1rem' }}>MY SELECTION</h2>
                <div className='orderList'>
                    {(cartItems.length === 0) ? (
                        <div className="alert alert-warning mt-5" role="alert">
                            Uups! Your Cart is empty
                        </div>
                    ) : (
                        cartItems.map(item => {
                            return (
                                <div className='flex-container shadow rounded m-2' key={item._id} style={{ color: 'white', background: '#5c5757' }}>
                                    <div className='m-2 p-1 col-6' style={{ textAlign: 'left' }}>
                                        <h1 style={{ color: '#fcdb45' }}>{item.name}  <b className='sideNote'>{item.size}</b></h1>
                                        <h2 style={{ fontSize: '18px' }}>Price:  {item.quantity} * {item.prices[0][item.size]} = {parseFloat(item.price).toFixed(2)}€</h2>
                                        <h1 style={{ display: 'inline' }}>Quantity : </h1>
                                        <i className="fa fa-minus" id="minusID" aria-hidden="true" title='Subtract' onClick={() => { dispatch(addToCart(item, (item.quantity - 1), item.size)) }}></i>
                                        <b style={{ fontSize: '1.3rem', margin: '1rem' }}>{item.quantity}</b>
                                        <i className="fa fa-plus" aria-hidden="true" title='Add' onClick={() => { dispatch(addToCart(item, (item.quantity + 1), item.size)) }}></i>
                                    </div>
                                    <div className='m-1 align-self-center col-4'>
                                        <img src={item.image} style={{ width: '160px', height: '130px' }} alt={item.name}/>
                                    </div>
                                    <div className='m-1 align-self-center w-100'>
                                        <i className="fa fa-trash" aria-hidden="true" title="Remove item" onClick={() => { dispatch(deleteFromCart(item)) }}></i>
                                    </div>
                                    <p className="pizzaSize">PIZZA-HOT</p>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
            <div className='col-md-4 text-right'>
                <h2 style={{ fontSize: '35px', color: 'white', marginBottom: '1rem' }}>TOTAL PRICE</h2>
                <img className='m-2' src={pizzaLogo} alt="Pizza Logo" />
                <br></br>
                <i className='finalPrice'>{totalPrice}€</i>
                <br></br>
                <Checkout totalPrice={totalPrice} />
            </div>
        </div>
    )
}
