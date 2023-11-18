import axios from 'axios'
import swal from 'sweetalert'

// Action to register a user
export const registerUser = (user) => async dispatch => {
    dispatch({ type: 'USER_REGISTER_REQUEST' })
    try {
        const response = await axios.post('/api/users/register', user)
        console.log(response)
        dispatch({ type: 'USER_REGISTER_SUCCESS' })

    } catch (error) {
        dispatch({ type: 'USER_REGISTER_FAILED', payload: error })
    }
}

// Action to log in a user
export const loginUser = (user) => async dispatch => {
    dispatch({ type: 'USER_LOGIN_REQUEST' })
    try {
        const response = await axios.post('/api/users/login', user)
        console.log(response)
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data })
        localStorage.setItem('currentUser', JSON.stringify(response.data))
        window.location.href = '/'
    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAILED', payload: error })
    }
}

// Action to log out a user
export const logoutUser = () => dispatch => {
    localStorage.removeItem('currentUser')
    window.location.href = '/login'
}

// Action to get all users
export const getAllUsers = () => async (dispatch) => {
    dispatch({ type: 'GET_USERS_REQUEST' })
    try {
        const response = await axios.get('/api/users/getallusers')
        console.log(response);
        dispatch({ type: 'GET_USERS_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_USERS_FAILED', payload: error })
    }
}

// Action to delete a user
export const deleteUser = (userId) => async (dispatch) => {
    // Display a confirmation dialog
    const confirmUpdate = await swal({
        title: 'Confirm Update',
        text: 'Are you sure you want to delete this customer?',
        icon: 'warning',
        buttons: ['Cancel', 'Delete'],
        dangerMode: true,
    });
    if (!confirmUpdate) {
        // User canceled the delete, do nothing
        return;
    }

    try {
        const res = await axios.delete('/api/users/deleteuser', { userId })
        swal("User deleted successfully", "success")
        console.log(res);
        setTimeout(function () {
            window.location.href = "/admin/userlist"
        }, 2500)
    } catch (error) {
        swal("Error while deleting User!", "warning")
    }
}


// Action to send a password reset email
export const sendPasswordResetEmail = (email) => async (dispatch) => {
    dispatch({ type: 'SEND_RESET_EMAIL_REQUEST' });
    try {
        const response = await axios.post('/api/users/forgot-password', { email });
        dispatch({ type: 'SEND_RESET_EMAIL_SUCCESS', payload: response.data });
        swal(`Please check your email <${email}> for password reset instructions!`, "success")
    } catch (error) {
        dispatch({ type: 'SEND_RESET_EMAIL_FAILED', payload: error });
    }
};

// Action to reset the user's password
export const resetPassword = (token, password) => async (dispatch) => {
    dispatch({ type: 'RESET_PASSWORD_REQUEST' });
    try {
        const response = await axios.post(`/api/users/reset-password/${token}`, { password });
        dispatch({ type: 'RESET_PASSWORD_SUCCESS', payload: response.data });
        swal("Your password has been successfully reset!", "success")
        setTimeout(function () {
            window.location.href = "/login"
        }, 3000)
    } catch (error) {
        dispatch({ type: 'RESET_PASSWORD_FAILED', payload: error });
    }
}