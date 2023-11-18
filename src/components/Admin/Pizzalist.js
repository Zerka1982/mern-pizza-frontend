import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletePizza, getAllPizzas } from '../../actions/pizzaActions'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

export default function Pizzalist() {
    // Get dispatch and Redux state
    const dispatch = useDispatch()
    const pizzastate = useSelector(state => state.getAllPizzasReducer)
    const { pizzas, error, loading } = pizzastate

    // Fetch all pizzas when the component mounts
    useEffect(() => {
        dispatch(getAllPizzas())
    }, [dispatch])

    return (
        <>
            <div className='row justify-content-center'>
                {
                    loading ? (<Loading />)
                        : error ? (<Error error='Something went wrong' />)
                            : (
                                <div>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr style={{ textAlign: 'left' }}>
                                                <th scope='col-2'></th>
                                                <th scope="col-4">Pizza Name</th>
                                                <th scope="col-2">Prices</th>
                                                <th scope="col-2">Category</th>
                                                <th scope="col-2">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                pizzas && pizzas.map(pizza => (
                                                    <tr key={pizza._id} style={{ textAlign: 'left' }}>
                                                        <td><img className='rounded' src={pizza.image} alt={pizza.name} width='100px' height='85px' /></td>
                                                        <td className='py-4'>{pizza.name}</td>
                                                        <td className='py-3'>
                                                            Small: {pizza.prices[0]['small']}€<br></br>
                                                            Medium: {pizza.prices[0]['medium']}€<br></br>
                                                            Large: {pizza.prices[0]['large']}€<br></br>
                                                        </td>
                                                        <td className='py-4'>{pizza.category}</td>
                                                        <td className='pt-4 justify-content-center'>
                                                            <Link to={`/admin/editpizza/${pizza._id}`}>
                                                                <i className="fas fa-edit" title="Edit pizza"></i>
                                                            </Link>
                                                            &nbsp;&nbsp;
                                                            <button
                                                                id={pizza._id}
                                                                className="btn btn-danger delete-button" // Add a CSS class for styling
                                                                title="Delete pizza"
                                                                onClick={() => { dispatch(deletePizza(pizza._id)) }}>
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            )}
            </div>
        </>
    )
}
