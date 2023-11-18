import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/userActions'

// Navbar component that displays navigation links and user information
export default function Navbar() {
    const cartstate = useSelector(state => state.cartReducer)
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()

    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow p-3 bg-white" id="navbarId">
                <a className="navbar-brand" href={currentUser ? '/' : '/login'}>
                    <h2>PIZZA-HOT</h2>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {currentUser && !currentUser.isAdmin ? (
                            // Display dropdown menu for regular users
                            <div className="dropdown">
                                <a className="dropdown-toggle p-2 text-decoration-none" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {currentUser.name}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="/">Home page</a>
                                    <a className="dropdown-item" href="/orders">My selection</a>
                                    <a className="dropdown-item" onClick={() => { dispatch(logoutUser()) }}>Log-out</a>
                                </div>
                            </div>
                        ) : currentUser && currentUser.isAdmin ? (
                            // Display dropdown menu for admin users
                            <>
                                <div className="dropdown dropleft">
                                    <a className="dropdown-toggle p-2 text-decoration-none" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {currentUser.name}
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="/">Home page</a>
                                        <a className="dropdown-item" href="/admin/pizzalist">Admin Panel</a>
                                        <a className="dropdown-item" onClick={() => { dispatch(logoutUser()) }}>Log-out</a>
                                    </div>
                                </div>
                            </>
                        ) : (
                            // Display login and register links for unauthenticated users
                            <li className="nav-item">
                                {!currentUser && (window.location.href == 'http://localhost:3000/login') ? (
                                    <a className="nav-link" href="/register">Register</a>
                                ) : (
                                    <a className="nav-link" href="/login">Login</a>
                                )}
                            </li>
                        )}

                        {currentUser && !currentUser.isAdmin ? (
                            // Display shopping cart icon and count for regular users
                            <li className="nav-item">
                                <a className="nav-link" href="/cart">
                                    <i className="fas fa-shopping-cart"></i> <i style={cartstate.cartItems.length > 0 ? { fontSize: '1.2rem', fontWeight: 'bold', backgroundColor: '#ffc107', padding: '10px' } : { fontSize: '1.5rem', color: 'black' }}>{cartstate.cartItems.length}</i>
                                </a>
                            </li>
                        ) : (
                            // Display shopping cart icon and count for admin users
                            <li className="nav-item d-none">
                                <a className="nav-link" href="/cart">
                                    <i className="fas fa-shopping-cart"></i> <i style={cartstate.cartItems.length > 0 ? { fontSize: '1.2rem', fontWeight: 'bold', backgroundColor: '#ffc107', padding: '10px' } : { fontSize: '1.5rem', color: 'black' }}>{cartstate.cartItems.length}</i>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    )
}
