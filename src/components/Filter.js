import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterPizza } from '../actions/pizzaActions'

// A component for filtering pizzas by name and category
function Filter() {
    // State variables to store the search key and selected category
    const [searchkey, setSearchKey] = useState('')
    const [category, setCategory] = useState('all')

    // Dispatch function to trigger pizza filtering
    const dispatch = useDispatch()
    return (
        <div className='p-4 bg-secondary rounded'>
            <form>
                <div className="row d-flex align-items-center">
                    <div class="col">
                        <input 
                            type="text" 
                            className="form-control p-2 my-1" 
                            placeholder="Search pizza by name" 
                            value={searchkey}
                            onChange={(e) => setSearchKey(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <select className="form-select p-2" value={category}
                            onChange={(e) => setCategory(e.target.value)}>
                            <option>All</option>
                            <option>Veg</option>
                            <option>Nonveg</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Filter