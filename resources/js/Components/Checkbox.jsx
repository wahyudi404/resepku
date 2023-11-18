import React from 'react'

const Checkbox = ({id, value, label, ...rest}) => {
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value={value} id={id} {...rest} />
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
        </div>
    )
}

export default Checkbox
