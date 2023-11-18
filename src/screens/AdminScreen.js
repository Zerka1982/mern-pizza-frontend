import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function AdminScreen() {
    // Get the current user's state using the useSelector hook.
    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState

    // Use useEffect to check if the user is logged in and has admin privileges.
    useEffect(() => {
        // If the user is not logged in or is not an admin, redirect to the homepage.
        if (localStorage.getItem('currentUser') === null || !currentUser.isAdmin) {
            window.location.href = '/'
        }
    }, []);

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h2 className='text-center bg-white text-dark p-2 my-2'>Admin Panel</h2>
                    <div className='col-md-2'>
                        {/* Sidebar with links to various admin features */}
                        <div className="btn-group-vertical" style={{ minHeight: '450px' }}>
                            <Link className='btn btn-info p-5' to='/admin/userlist'>List All Users</Link>
                            <Link className='btn btn-success p-5' to='/admin/pizzalist'>List All Pizzas</Link>
                            <Link className='btn btn-warning p-5' to='/admin/addnewpizza'>Add new Pizza</Link>
                            <Link className='btn btn-light p-5' to='/admin/orderlist'>List All Orders</Link>
                        </div>
                    </div>
                    <div className='col-md-10'>
                        {/* Render the child routes defined in the nested routing configuration */}
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
