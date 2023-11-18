import React from 'react'

const TextInput = ({
    id,
    type,
    name,
    value,
    className,
    isFocused = false,
    ...rest
}) => {
    return (
        <>
            <input id={id} type={type} name={name} value={value} className={`form-control ${className}`} autoFocus={isFocused} {...rest} />
        </>
    )
}

export default TextInput
