import React from 'react'

// A component to display a loading spinner while content is being loaded
export default function
    () {
    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className="spinner-border text-warning" role="status" style={{height: '150px', width:'150px'}}>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
