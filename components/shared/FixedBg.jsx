import React from 'react'

const FixedBg = (props) => {
  return (
    <div className="fixed w-full h-screen z-[-10] bg-center" style={{ backgroundImage:`url(${props.img})`}}></div>
  )
}

export default FixedBg