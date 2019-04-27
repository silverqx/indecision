import React from 'react'

const Error = props => (
    <div>
        {
            props.error &&
            <div className="add-option-error">
                {props.error}
            </div>
        }
    </div>
)

export default Error
