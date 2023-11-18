import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterPizza, getAllPizzas } from '../actions/pizzaActions'
import Pizza from '../components/Pizza'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Silder from '../components/Silder'
import Strength from '../components/Strength'
import Footer from '../components/Footer'

export default function Homescreen() {
    const [query, setQuery] = useState('')
    const [pizzatype, setPizzaType] = useState('all')
    const dispatch = useDispatch()
    const pizzastate = useSelector(state => state.getAllPizzasReducer)
    const { pizzas, error, loading } = pizzastate
    useEffect(() => {
        dispatch(getAllPizzas())
    }, [dispatch])

    return (
        <>
            <Silder />
            <div className='row justify-content-center p-4'>
                <form className="form-inline col-sm-3 mb-2">
                    <input
                        className="form-control m-1 p-2"
                        type="search"
                        placeholder="Search for a pizza..."
                        aria-label="Search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                </form>
                <div className='col-sm-3'>
                    <form>
                        <select
                            className="form-select col-sm-3 p-2 m-1"
                            value={pizzatype}
                            onChange={e => setPizzaType(e.target.value)}
                            onClick={()=>{ dispatch(filterPizza(pizzatype))}}
                            >
                            
                            <option>all</option>
                            <option>veg</option>
                            <option>non</option>
                        </select>
                    </form>
                </div>
                {/* <div className='col-sm-3'>
                    <button 
                        className='btn btn-primary  p-2 m-1'
                        onClick={()=>{ dispatch(filterPizza(pizzatype))}}
                    >
                        Search
                    </button>
                </div> */}
            </div>

            {/* <div className='col-8 mx-auto'>
                            <Filter />
                        </div> */}

            <div className='row justify-content-center p-3'>
                {loading ? (<Loading />) : error ? (<Error error='Something went wrong' />) : (
                    pizzas.filter(pizza => pizza.name.toLowerCase().includes(query)
                    ).map((pizza, i) => {
                        return <div className='col-md-4 col-sm-4 m-4 p-1 shadow-lg bg-white rounded' key={i + 1} style={{ width: '22rem' }}>
                            <Pizza pizza={pizza} />
                        </div>
                    })
                )}
            </div>
            {<Strength />}
            {<Footer />}
        </>
    )
}
