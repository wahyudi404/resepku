import React from 'react'

const InputError = ({id, message}) => {
  return (
    <>
      <div id={id} className="invalid-feedback">
        {message}
      </div>
    </>
  )
}

export default InputError
