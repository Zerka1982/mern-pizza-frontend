// Reducer for user registration.
export const registerUserReducer = (state={}, action) => {
    switch(action.type) {
        case 'USER_REGISTER_REQUEST' : return {
            loading: true
        }
        case 'USER_REGISTER_SUCCESS' : return {
            loading: false,
            success: true
        }
        case 'USER_REGISTER_FAILED' : return {
            loading: true,
            error: action.payload
        }
        default: return state
    }
}

// Reducer for user login.
export const loginUserReducer = (state={}, action) => {
    switch(action.type) {
        case 'USER_LOGIN_REQUEST' : return {
            loading: true
        }
        case 'USER_LOGIN_SUCCESS' : return {
            loading: false,
            success: true,
            currentUser: action.payload
        }
        case 'USER_LOGIN_FAILED' : return {
            loading: false,
            error: action.payload
        }
        default: return state
    }
}

// Reducer for getting all users.
export const getAllUsersReducer=(state={users: []}, action)=>{
    switch(action.type){
        case 'GET_USERS_REQUEST' : return{
            loading: true,
            ...state
        }
        case 'GET_USERS_SUCCESS' : return{
            loading: false,
            users : action.payload
        }
        case 'GET_USERS_FAILED' : return{
            error : action.payload,
            loading: false,
        }
        default : return state
    }
}

// Reducers for the password reset process.
const initialState = {
    resetEmailLoading: false,
    resetEmailSuccess: null,
    resetEmailError: null,
    resetPasswordLoading: false,
    resetPasswordSuccess: null,
    resetPasswordError: null,
  };
  
  export const resetReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEND_RESET_EMAIL_REQUEST':
        return { ...state, resetEmailLoading: true };
      case 'SEND_RESET_EMAIL_SUCCESS':
        return { ...state, resetEmailLoading: false, resetEmailSuccess: action.payload };
      case 'SEND_RESET_EMAIL_FAILED':
        return { ...state, resetEmailLoading: false, resetEmailError: action.payload };
      case 'RESET_PASSWORD_REQUEST':
        return { ...state, resetPasswordLoading: true };
      case 'RESET_PASSWORD_SUCCESS':
        return { ...state, resetPasswordLoading: false, resetPasswordSuccess: action.payload };
      case 'RESET_PASSWORD_FAILED':
        return { ...state, resetPasswordLoading: false, resetPasswordError: action.payload };
      default:
        return state;
    }
  };