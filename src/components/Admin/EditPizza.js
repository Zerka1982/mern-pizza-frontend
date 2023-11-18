import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPizzaById, updatePizza } from '../../actions/pizzaActions'
import Error from '../Error'
import Loading from '../Loading'
function EditPizza() {
    // Define component-level state variables for form inputs
    const [name, setname] = useState('')
    const [smallPrice, setsmallPrice] = useState('')
    const [mediumPrice, setmediumPrice] = useState('')
    const [largePrice, setlargePrice] = useState('')
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')

    // Get dispatch, parameters, and Redux state
    const dispatch = useDispatch()
    const { pizzaId } = useParams();
    const getPizzaByIdState = useSelector((state) => state.getPizzaByIdReducer)
    const { pizza } = getPizzaByIdState
    const updatePizzaState = useSelector((state) => state.updatePizzaReducer)
    const { updateloading, updateerror } = updatePizzaState

     // Fetch pizza details by ID and populate the form when the component mounts
    useEffect(() => {
        if (pizza) {
            if (pizza._id === pizzaId) {
                setname(pizza.name) 
                setsmallPrice(pizza.prices[0].small)
                setmediumPrice(pizza.prices[0].medium)
                setlargePrice(pizza.prices[0].large)
                setimage(pizza.image)
                setdescription(pizza.description)
                setcategory(pizza.category)
            } else {
                dispatch(getPizzaById(pizzaId))
            }

        } else {
            dispatch(getPizzaById(pizzaId))
        }
    }, [pizza, dispatch]);

     // Handle form submission
    const submitForm = (e) => {
        e.preventDefault()
         // Create an updated pizza object from form inputs
        const updatedPizza = {
            _id: pizzaId,
            name,
            image,
            description,
            category,
            prices: {
                small: smallPrice,
                medium: mediumPrice,
                large: largePrice
            }
        }
         // Dispatch the action to update the pizza
        dispatch(updatePizza(updatedPizza))
    }

    return (
        <div>
            {updateloading && <Loading />}
            {updateerror && <Error error="Ading new pizza failed..." />}
            {/* {success && <Success success="Pizza added successfully" />} */}
            {/* Render the pizza update form */}
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
                        />
                    </div>
                </div>
                <div className="form-row d-flex justify-content-between my-2">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputSmallPrice">Small Price</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputSmallPrice"
                            placeholder='Enter Small Price'
                            value={smallPrice}
                            onChange={e => setsmallPrice(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputMediumPrice">Medium Price</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputMediumPrice"
                            placeholder='Enter Medium Price'
                            value={mediumPrice}
                            onChange={e => setmediumPrice(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputLargePrice">Large Price</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputLargePrice"
                            placeholder='Enter Large Price'
                            value={largePrice}
                            onChange={e => setlargePrice(e.target.value)}
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
                    />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="category">Category</label>
                    <input
                        type="text"
                        className="form-control"
                        id="category"
                        placeholder='Enter Category'
                        value={category}
                        onChange={e => setcategory(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary my-4 p-2" type='submit'>Update</button>
            </form>
        </div>
    )
}

export default EditPizza