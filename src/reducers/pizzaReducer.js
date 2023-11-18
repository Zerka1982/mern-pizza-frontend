// Reducer for getting all pizzas.
export const getAllPizzasReducer=(state={pizzas: []}, action)=>{
    switch(action.type){
        case 'GET_PIZZAS_REQUEST' : return{
            loading: true,
            ...state
        }
        case 'GET_PIZZAS_SUCCESS' : return{
            loading: false,
            pizzas : action.payload
        }
        case 'GET_PIZZAS_FAILED' : return{
            error : action.payload,
            loading: false,
        }
        default : return state
    }
}

// Reducer for adding a pizza.
export const addPizzaReducer=(state={}, action)=>{
    switch(action.type){
        case 'ADD_PIZZAS_REQUEST' : return{
            ...state,
            loading: true
        }
        case 'ADD_PIZZAS_SUCCESS' : return{
            success : true,
            loading: false
        }
        case 'ADD_PIZZAS_FAILED' : return{
            error : action.payload,
            loading: false,
        }
        default : return state
    }
}

// Reducer for getting a pizza by ID.
export const getPizzaByIdReducer=(state={}, action)=>{
    switch(action.type){
        case 'GET_PIZZABYID_REQUEST' : return{
            loading: true,
            ...state
        }
        case 'GET_PIZZABYID_SUCCESS' : return{
            loading: false,
            pizza : action.payload
        }
        case 'GET_PIZZABYID_FAILED' : return{
            error : action.payload,
            loading: false,
        }
        default : return state
    }
}

// Reducer for updating a pizza by ID.
export const updatePizzaReducer=(state={}, action)=>{
    switch(action.type){
        case 'UPDATE_PIZZABYID_REQUEST' : return{
            loading: true,
            ...state
        }
        case 'UPDATE_PIZZABYID_SUCCESS' : return{
            updateloading: false,
            updatesuccess : true
        }
        case 'UPDATE_PIZZABYID_FAILED' : return{
            updateerror : action.payload,
            loading: false,
        }
        default : return state
    }
}
