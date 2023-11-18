import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading';

// Define the Loginscreen component
export default function Loginscreen() {
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const loginstate = useSelector(state => state.loginUserReducer); // Select user login state
  const { loading, error, currentUser } = loginstate; // Destructure login state
  const [formErrors, setFormErrors] = useState({}); // State for form validation errors
  const [passwordError, setPasswordError] = useState(''); // State for password-specific error message
  const dispatch = useDispatch(); // Redux dispatch function

  // Function to validate the login form
  const validateForm = () => {
    const errors = {};

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  // Function to handle the login process
  function login() {
    if (validateForm()) {
      const user = { email, password };
      dispatch(loginUser(user));
      setPasswordError('');
    }
  }

  // useEffect to handle displaying password-related errors
  useEffect(() => {
    if (error) {
      if (typeof error === 'string') {
        // Display the general error message
        setPasswordError('Login failed. Please check your credentials.');
      } else {
        setPasswordError('');
      }
    }
  }, [error]);

  // Redirect to the home page if the user is already logged in
  if (currentUser) {
    window.location.href = '/';
    return false;
  }

  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 bg-secondary shadow p-3 m-5 rounded'>
          <h2 className='text-center m-5' style={{ color: 'white', fontSize: '35px' }}><i className="fa fa-sign-in" aria-hidden="true"></i> LOGIN FORM</h2>
          {loading && (<Loading />)}
          {/* {error && (<Error error='Username or Password is incorrect' />)} */}
          {formErrors.email && <Error error={formErrors.email} />}
          {formErrors.password && <Error error={formErrors.password} />}
          {passwordError && <Error error={passwordError} />}
          <div>
            <input
              type='email'
              required
              className='form-control'
              placeholder='Type your Email'
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              autoFocus
            />
            <br></br>
            <input
              type='password'
              required
              className='form-control'
              placeholder='Type your password'
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
            <div className='d-flex justify-content-between align-items-center'>
              <button className='btn btn-danger my-3 d-flex align-items-start' onClick={login}>LOGIN NOW</button>
              <Link to="/forgot-password" className="text-white">Forgot Password?</Link>
            </div>
          </div>
          <h2 style={{ color: '#fff3cd' }}>Don't you have an account? <a href='/register' className='registerUser'>Register Now</a></h2>
        </div>
      </div>
    </div>
  );
}
