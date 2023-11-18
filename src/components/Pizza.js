import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import chefHat from '../assets/images/chef-hat.png'

// Pizza component displays pizza details, allows selection of size and quantity, and provides an option to add to the cart.
export default function Pizza({ pizza }) {
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate

    const [quantity, setQuantity] = useState(1)
    const [size, setSize] = useState('small')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()

    // Function to add the selected pizza to the cart
    function addtocart() {
        dispatch(addToCart(pizza, quantity, size))
    }

    return (
        <>
            {/* Redirect to login if not authenticated */}
            {!currentUser ? window.location.href= '/login': (
                <div>
                    {/* Display pizza name and image with a clickable option to see details */}
                    <div onClick={handleShow} style={{ cursor: 'pointer' }}>
                        <h1>{pizza.name}</h1>
                        <img src={pizza.image} className='img-thumbnail rounded' title='See details' style={{ height: '200px', width: '300px' }} alt='' />
                    </div>
                    <div className='flex-container p-2'>
                        <div className='w-100'>
                            <p>Size</p>
                            <select className='form-control p-1' value={size} onChange={(e) => { setSize(e.target.value) }}>
                                {pizza.size.map((size, i) => {
                                    return <option key={i + 1} value={size}>{size}</option>
                                })
                                }
                            </select>
                        </div>
                        <div className='w-100'>
                            <p>Quantity</p>
                            <select className='form-control p-1' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                                {[...Array(10).keys()].map((x, i) => {
                                    return <option key={i + 1} value={i + 1}>{i + 1}</option>
                                })
                                }
                            </select>
                        </div>
                    </div>
                    <div className='flex-container p-2'>
                        <div className='w-100'>
                            {/* Display the total price based on the selected size and quantity */}
                            <h1 className='p-2' style={{ fontSize: '14px' }}>Price: <i>{parseFloat(pizza.prices[0][size] * quantity).toFixed(2)}</i> €</h1>
                        </div>
                        {/* Display 'ADD TO CART' button for regular users */}
                        {!currentUser.isAdmin ? (
                            <div className='m-1 w-100'>
                                <button className='btn btn-danger' onClick={addtocart}>ADD TO CART</button>
                            </div>
                        ) : (
                            // Display a placeholder div for admin users
                            <div></div>
                        )}
                    </div>

                    {/* Modal for displaying pizza details */}
                    <Modal show={show} onClick={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title><img src={chefHat} style={{ with: '40px', height: '40px' }} alt='pizza'/> {pizza.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='d-flex justify-content-around'>
                            <img src={pizza.image} className='img-thumbnail rounded' style={{ height: '200px', width: '250px' }} alt='' />
                            <div className='p-2'>
                                <h2>Description</h2>
                                <h6>{pizza.description}</h6>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button className='btn btn-danger' onClick={handleClose}>Close</button>
                        </Modal.Footer>
                    </Modal>
                </div>
            )}
        </>
    )
}
