import React from 'react'

const ButtonArrow = ({ icon, handle }) => {
  return (
    <button onClick={handle}>
      <img src={ icon } className="w-7 h-7" />
    </button>
  )
}

export default ButtonArrow
