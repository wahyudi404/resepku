import React from 'react'

const InputLabel = ({ htmlFor, value, className }) => {
    return (
        <>
            <label htmlFor={htmlFor} className={`form-label ${className}`}>
                {value}
            </label>
        </>
    )
}

export default InputLabel
