// Import necessary modules and actions
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../actions/userActions';
import { useParams } from 'react-router-dom';
import ChefHat from '../assets/images/pizza-preview.png'

// Define the ResetPassword component
const ResetPassword = ({ match }) => {
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const { token } = useParams(); // Extract token from URL parameters
    console.log("here is the token", token);

    // Function to handle the password reset action
    const handleResetPassword = () => {
        dispatch(resetPassword(token, password));
    };

    return (
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 bg-secondary shadow p-3 m-5 rounded'>
                    <img src={ChefHat} alt='chef-hat' style={{ width: '120px', height: '120px' }}/>
                    <h2 className='text-center m-5' style={{ color: 'white', fontSize: '35px' }}>PASSWORD RESET <i className="fa fa-window-restore" aria-hidden="true"></i></h2>
                    <div>
                        <input
                            type='password'
                            required
                            className='form-control'
                            placeholder='Type your new password'
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            autoFocus
                        />
                        <br></br>
                        <button className='btn btn-warning my-3 d-flex align-items-start' onClick={handleResetPassword}>Reset Password</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;