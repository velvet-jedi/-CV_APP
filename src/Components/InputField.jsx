/* eslint-disable react/prop-types */
import React from 'react'

const InputField = ({id, value, labelText, placeholder, type}) => {
  return (
    <div>
        <label htmlFor={id}>
            <span>{labelText}</span>
        </label>

        <input type={type} 
        id={id}
        placeholder={placeholder}
        value={value}
        />

    </div>
  )
}

export default InputField