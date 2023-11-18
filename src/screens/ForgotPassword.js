// Import necessary dependencies and action
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendPasswordResetEmail } from '../actions/userActions';
import ChefHat from '../assets/images/pizza-preview.png'; // Import an image

// Define the ForgotPassword component
const ForgotPassword = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState(''); // State to store the email input value

    // Function to handle sending a password reset email
    const handleSendResetEmail = () => {
        dispatch(sendPasswordResetEmail(email));
    };

    return (
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 bg-secondary shadow p-5 m-5 rounded'>
                    <img src={ChefHat} alt='chef-hat' style={{ width: '120px', height: '120px'}}/>
                    <h2 className='text-center m-5' style={{ color: 'white', fontSize: '35px' }}>
                        FORGOT PASSWORD <i className="fa fa-lock" aria-hidden="true"></i>
                    </h2>
                    {/* Input field for email */}
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
                        {/* Button to send the reset email */}
                        <button className='btn btn-primary my-3 d-flex align-items-start' onClick={handleSendResetEmail}>SEND NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ForgotPassword;