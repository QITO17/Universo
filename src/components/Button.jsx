import React from 'react'

const Button = ({getQuote}) => {
  return (
    <button onClick={getQuote} className="button1">Change Space</button>
  )
}

export default Button