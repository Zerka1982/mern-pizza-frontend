import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getAllUsers } from '../../actions/userActions';
import Loading from './../Loading'
import Error from './../Error'

export default function Userlist() {
  // Get the list of users from Redux state
  const allUsersState = useSelector(state => state.getAllUsersReducer)
  const { loading, users, error } = allUsersState
  const dispatch = useDispatch()

  // Fetch all users when the component mounts
  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch]);
  return (
    <div>
      <h2 style={{ color: 'white', fontSize: '35px' }}>User list</h2>
      {loading && (<Loading />)}
      {error && (<Error error="Admin Users list request failed" />)}
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">User Type</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          { users && users.map(user => (
            <tr key={user._id}>
              <td className='p-3'>{!user.isAdmin ? (<h6>User</h6>) : (<h6 style={{color: 'red'}}>Admin <span className="badge badge-secondary">⭐</span></h6>)}</td>
              <td className='p-3'>{user.name}</td>
              <td className='p-3'>{user.email}</td>
              <td className='p-3'>{user.isAdmin ? 
                (<h6 style={{fontSize: '2rem'}}>👨🏻‍💻</h6>)
                : (<i 
                  className="fa-solid fa-trash-can" 
                  title="Delete item"
                  onClick={() => {dispatch(deleteUser(user._id))}}>
              </i>)}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}
