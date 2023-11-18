import React from 'react'

const Button = ({ children, type = 'button', className = 'btn-primary', ...rest }) => {
    return (
        <>
            <button type={type} className={`btn ${className}`} {...rest}>{children}</button>
        </>
    )
}

export default Button
