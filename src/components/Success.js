import React from 'react'

// Success component to display success messages
// Props:
// - success: The success message to be displayed.
function Success({ success }) {
    return (
        <div>
            <div className="alert alert-success" role="alert">
                {success}
            </div>
        </div>
    )
}

export default Success