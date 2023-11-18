import React, { useState } from 'react'
import {addPizza} from '../../actions/pizzaActions'
import { useDispatch, useSelector } from 'react-redux'
import Success from '../Success'
import Error from '../Error'
import Loading from '../Loading'

const AddNewPizza = () => {
    // Define component-level state variables for form inputs
    const [name, setname] = useState('')
    const [smallPrice, setsmallPrice] = useState('')
    const [mediumPrice, setmediumPrice] = useState('')
    const [largePrice, setlargePrice] = useState('')
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')
    // Get the state and actions from Redux
    const addPizzaState = useSelector(state => state.addPizzaReducer)
    const {loading, error, success} = addPizzaState

    const dispatch = useDispatch()
    // Handle form submission
    const submitForm = (e) => {
        e.preventDefault()
        // Create a pizza object from form inputs
        const pizza = {
            name,
            image,
            description,
            category,
            prices:{
                small: smallPrice,
                medium: mediumPrice,
                large: largePrice
            }
        }
        // Dispatch the action to add a new pizza
        dispatch(addPizza(pizza))
    }
    return (
        <div>
            {loading && (<Loading />)}
            {error && (<Error error="Ading new pizza failed..." />)}
            {success && (<Success success="Pizza added successfully" />)}
            {/* Render the pizza addition form */}
            <form className='' onSubmit={submitForm} style={{ color: 'white', textAlign: 'left' }}>
                <div className="form-row">
                    <div className="form-group col-md-12 my-2">
                        <label htmlFor="inputName">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            placeholder='Enter Pizza Name'
                            value={name}
                            onChange={e => setname(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-row d-flex justify-content-between my-2">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputSmallPrice">Small Price</label>
                        <input
                            type="number"
                            className="form-control"
                            id="inputSmallPrice"
                            placeholder='Enter Small Price'
                            value={smallPrice}
                            onChange={e => setsmallPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputMediumPrice">Medium Price</label>
                        <input
                            type="number"
                            className="form-control"
                            id="inputMediumPrice"
                            placeholder='Enter Medium Price'
                            value={mediumPrice}
                            onChange={e => setmediumPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputLargePrice">Large Price</label>
                        <input
                            type="number"
                            className="form-control"
                            id="inputLargePrice"
                            placeholder='Enter Large Price'
                            value={largePrice}
                            onChange={e => setlargePrice(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="imageURL">Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        id="imageURL"
                        placeholder='Enter Image URL'
                        value={image}
                        onChange={e => setimage(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        placeholder='Enter Description'
                        value={description}
                        onChange={e => setdescription(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="category">Category</label>
                    <input
                        type="text"
                        className="form-control"
                        id="category"
                        placeholder='Enter Category [veg or non]'
                        value={category}
                        onChange={e => setcategory(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary my-4 p-2" type='submit'>Add new item</button>
            </form>
        </div>
    )
}
export default AddNewPizza