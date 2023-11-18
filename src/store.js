import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; // Import 'thunk' from 'redux-thunk'
import {
  getAllPizzasReducer,
  addPizzaReducer,
  getPizzaByIdReducer,
  updatePizzaReducer,
} from './reducers/pizzaReducer';
import { cartReducer } from './reducers/cartReducer';
import {
  registerUserReducer,
  loginUserReducer,
  getAllUsersReducer,
} from './reducers/userReducer';
import {
  placeOrderReducer,
  getUserOrdersReducer,
  allUserOrdersReducer,
} from './reducers/orderReducer';

// Combine all reducers into a single root reducer
const rootReducer = {
  getAllPizzasReducer,
  cartReducer,
  registerUserReducer,
  loginUserReducer,
  placeOrderReducer,
  getUserOrdersReducer,
  addPizzaReducer,
  getPizzaByIdReducer,
  updatePizzaReducer,
  allUserOrdersReducer,
  getAllUsersReducer,
};

// Retrieve cart items and user information from local storage
const cartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];
const currentUser = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser'))
  : null;

// Create an initial state with the retrieved cart items and user information
const preloadedState = {
  cartReducer: {
    cartItems,
  },
  loginUserReducer: {
    currentUser,
  },
};

// Create and export the Redux store with configureStore
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  preloadedState,
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

export default store;
