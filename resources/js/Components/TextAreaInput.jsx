import React from 'react'

const TextAreaInput = ({ id, className, rows = 3, defaultValue, ...rest }) => {
    return (
        <>
            <textarea className={`form-control ${className}`} id={id} name={id} rows={rows} {...rest} defaultValue={defaultValue}>
            </textarea>
        </>
    )
}

export default TextAreaInput
