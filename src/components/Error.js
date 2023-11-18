import React from 'react'

// Functional component to display an error message
export default function Error({error}) {
    return (
        <div>
            <div className="alert alert-danger" role="alert">
                {error}
            </div>
        </div>
    )
}
