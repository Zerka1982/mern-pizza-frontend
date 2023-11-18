import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions';
import Success from '../components/Success';
import Error from '../components/Error';
import Loading from '../components/Loading';

// Define the Registerscreen component
export default function Registerscreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    // State variables to store error messages for each field
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [cpasswordError, setCPasswordError] = useState('');

    const userstate = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userstate;
    const registerstate = useSelector((state) => state.registerUserReducer);
    const { error, loading, success } = registerstate;

    const dispatch = useDispatch();

    const validateForm = () => {
        let isValid = true;

        // Reset error messages
        setNameError('');
        setEmailError('');
        setPasswordError('');
        setCPasswordError('');

        if (name.trim() === '') {
            setNameError('Name is required');
            isValid = false;
        }

        if (!email.match(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/)) {
            setEmailError('Invalid email format');
            isValid = false;
        }

        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters');
            isValid = false;
        }

        if (password !== cpassword) {
            setCPasswordError('Passwords do not match');
            isValid = false;
        }

        return isValid;
    };

    const register = () => {
        if (validateForm()) {
            const user = {
                name,
                email,
                password,
            };
            dispatch(registerUser(user));
            setTimeout(function () {
                window.location.href = '/login';
            }, 3000);
        }
    }

    if (currentUser) {
        window.location.href = '/';
        return false;
    }

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 shadow p-3 mb-5 rounded bg-secondary">
                    {loading && <Loading />}
                    {success && <Success success="User has been registered successfully" />}
                    {error && <Error error="Email already registered" />}
                    <div id="errorID"></div>
                    <h2 className="text-center my-4" style={{ color: 'white', fontSize: '35px' }}>
                        <i className="fa fa-user-plus" aria-hidden="true"></i> REGISTRATION FORM
                    </h2>
                    <div>
                        <input
                            type="text"
                            required
                            className="form-control"
                            placeholder="Type your name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            autoFocus
                        />
                        {nameError && <p className="alert alert-danger">{nameError}</p>} {/* Display error message */}
                        <br />
                        <input
                            type="email"
                            required
                            className="form-control"
                            placeholder="Type your email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        {emailError && <p className="alert alert-danger">{emailError}</p>} {/* Display error message */}
                        <br />
                        <input
                            type="password"
                            required
                            className="form-control"
                            placeholder="Type your password (8 characters minimum)"
                            title="8 characters minimum"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        {passwordError && <p className="alert alert-danger">{passwordError}</p>} {/* Display error message */}
                        <br />
                        <input
                            type="password"
                            required
                            className="form-control"
                            placeholder="Confirm your password"
                            title="8 characters minimum"
                            value={cpassword}
                            onChange={(e) => {
                                setCPassword(e.target.value);
                            }}
                        />
                        {cpasswordError && <p className="alert alert-danger">{cpasswordError}</p>} {/* Display error message */}
                        <br />
                        <button className="btn btn-danger my-3 d-flex align-items-start" onClick={register}>
                            REGISTER NOW
                        </button>
                        <h2 style={{ color: 'rgb(255, 243, 205)', textAlign: 'left' }}>
                            Do you have an account? <a href="/login" style={{ textDecoration: 'none', color: '#6fb8de' }}>Login Now</a>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
