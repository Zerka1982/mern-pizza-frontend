import axios from 'axios'
import swal from 'sweetalert'

// Action to get all pizzas
export const getAllPizzas = () => async (dispatch) => {
    dispatch({ type: 'GET_PIZZAS_REQUEST' })
    try {
        const response = await axios.get('/api/pizzas/getallpizzas')
        dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_PIZZAS_FAILED', payload: error })
    }
}

// Action to add a new pizza
export const addPizza = (pizza) => async (dispatch) => {
    dispatch({ type: 'ADD_PIZZAS_REQUEST' })
    try {
        console.log("here is the log for pizza", pizza)
        const response = await axios.post('/api/pizzas/addpizza', { pizza })
        dispatch({ type: 'ADD_PIZZAS_SUCCESS', payload: response.data })
        swal('success', 'Pizza has been added successfully')
        setTimeout(function () {
            window.location.href = '/admin/pizzalist'
        }, 3000)
    } catch (error) {
        dispatch({ type: 'ADD_PIZZAS_FAILED', payload: error })
    }
}

// Action to get a pizza by its ID
export const getPizzaById = (pizzaId) => async (dispatch) => {
    dispatch({ type: 'GET_PIZZABYID_REQUEST' })
    try {
        const response = await axios.post('/api/pizzas/getpizzabyid', { pizzaId })
        console.log(response);
        dispatch({ type: 'GET_PIZZABYID_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_PIZZABYID_FAILED', payload: error })
    }
}

// Action to update a pizza
export const updatePizza = (updatedPizza) => async (dispatch) => {
    // Display a confirmation dialog
    const confirmUpdate = await swal({
        title: 'Confirm Update',
        text: 'Are you sure you want to update this pizza?',
        icon: 'warning',
        buttons: ['Cancel', 'Update'],
        dangerMode: true,
    });
    if (!confirmUpdate) {
        // User canceled the update, do nothing
        return;
    }
    dispatch({ type: 'UPDATE_PIZZABYID_REQUEST' });
    try {
        const response = await axios.put('/api/pizzas/updatepizza',  {updatedPizza} );
        console.log(response);
        dispatch({ type: 'UPDATE_PIZZABYID_SUCCESS', payload: response.data });
        swal('success', 'Pizza has been saved successfully');
        setTimeout(function () {
            window.location.href = '/admin/pizzalist';
        }, 3000);
    } catch (error) {
        dispatch({ type: 'UPDATE_PIZZABYID_FAILED', payload: error.message }); // Store only the error message
    }
}


// Action to delete a pizza by its ID
export const deletePizza = (pizzaId) => async (dispatch) => {
    try {
        // Show a SweetAlert confirmation dialog
        const confirmDelete = await swal("Are you sure you want to delete this pizza?", {
            buttons: ["Cancel", "Delete"],
            icon: "warning",
        });
        if (confirmDelete) {
            // User confirmed the delete action
            const res = await axios.delete(`/api/pizzas/deletepizza/${pizzaId}`); // Use DELETE method
            console.log(res);
            swal("Pizza deleted successfully", "success");
            setTimeout(function () {
                window.location.href = '/admin/pizzalist';
            }, 3000);
        }
    } catch (error) {
        swal("Error while deleting Pizza!", "warning");
    }
}

// Action to filter pizzas by category
export const filterPizza = (category) => async (dispatch) => {
    let filterPizza;
    dispatch({ type: 'GET_PIZZAS_REQUEST' })
    try {
        const res = await axios.get('/api/pizzas/getallpizzas')
        if (category !== 'all') {
            filterPizza = res.data.filter(
                (pizza) => pizza.category.toLowerCase() === category
            );
            dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: filterPizza })
        } else {
            filterPizza = res.data.filter(
                (pizza) => pizza)
            dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: res.data })
        }
        console.log(filterPizza)
    } catch (error) {
        dispatch({ type: 'GET_PIZZAS_FAILED', payload: error })
    }
}