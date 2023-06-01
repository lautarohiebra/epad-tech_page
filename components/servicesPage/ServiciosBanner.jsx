import React from 'react'

const ServiciosBanner = (props) => {
  return (
    <h3 className="text-2xl font-semibold text-center bg-neutral block w-64 text-base-100 shadow-md p-4 border-l-8 border-primary rounded-r-md my-8">
        {props.text}
    </h3>
  )
}

export default ServiciosBanner